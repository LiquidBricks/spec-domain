import { readOwnerIndex, readValue, upsertOwnerIndex } from '../../_shared/ownerIndex.js';
import { readComponentInjectionRoutingIndex } from '../../component/injectionRouting/index.js';
import { SCHEMA_VERSION as COMPONENT_INDEX_SCHEMA_VERSION } from '../../component/injectionRouting/constants.js';
import { LABEL as instanceOfLabel } from '../../../edge/instance_of/componentInstance_component/constants.js';
import { LABEL as hasStateMachineLabel } from '../../../edge/has_stateMachine/componentInstance_stateMachine/constants.js';
import { LABEL as dataStateLabel } from '../../../edge/has_data_state/stateMachine_data/constants.js';
import { LABEL as taskStateLabel } from '../../../edge/has_task_state/stateMachine_task/constants.js';
import { LABEL as usesImportRefLabel } from '../../../edge/uses_import/componentInstance_importInstanceRef/constants.js';
import { LABEL as importRefInstanceLabel } from '../../../edge/uses_import/importInstanceRef_componentInstance/constants.js';
import { LABEL as importRefDefinitionLabel } from '../../../edge/uses_import/importInstanceRef_importRef/constants.js';
import { LABEL as usesGateRefLabel } from '../../../edge/uses_gate/componentInstance_gateInstanceRef/constants.js';
import { LABEL as gateRefInstanceLabel } from '../../../edge/uses_gate/gateInstanceRef_componentInstance/constants.js';
import { LABEL as gateRefDefinitionLabel } from '../../../edge/uses_gate/gateInstanceRef_gateRef/constants.js';
import * as constants from './constants.js';
import { ownerEdgeSchema, schema } from './schema.js';

async function readRefChild({ g, refId, definitionEdgeLabel, instanceEdgeLabel }) {
  const [[definitionId], [instanceVertexId]] = await Promise.all([
    g.V(refId).out(definitionEdgeLabel).id(),
    g.V(refId).out(instanceEdgeLabel).id(),
  ]);

  if (!definitionId || !instanceVertexId) return null;

  const [row] = await g.V(definitionId).valueMap('alias');
  const alias = readValue(row, 'alias');
  if (typeof alias !== 'string' || !alias.length) return null;

  return { alias, instanceVertexId };
}

async function readInstanceChildren({ g, instanceVertexId }) {
  const [importRefIds, gateRefIds] = await Promise.all([
    g.V(instanceVertexId).out(usesImportRefLabel).id(),
    g.V(instanceVertexId).out(usesGateRefLabel).id(),
  ]);

  const children = await Promise.all([
    ...(importRefIds ?? []).map((refId) => readRefChild({
      g,
      refId,
      definitionEdgeLabel: importRefDefinitionLabel,
      instanceEdgeLabel: importRefInstanceLabel,
    })),
    ...(gateRefIds ?? []).map((refId) => readRefChild({
      g,
      refId,
      definitionEdgeLabel: gateRefDefinitionLabel,
      instanceEdgeLabel: gateRefInstanceLabel,
    })),
  ]);

  return children.filter(Boolean);
}

async function readStateSources({ g, instance }) {
  const sourcesByStateEdgeId = {};
  const stateEdgeByNode = new Map();

  for (const { type, label } of [
    { type: 'data', label: dataStateLabel },
    { type: 'task', label: taskStateLabel },
  ]) {
    const edgeIds = await g.V(instance.stateMachineId).outE(label).id();
    for (const stateEdgeId of edgeIds ?? []) {
      const [nodeId] = await g.E(stateEdgeId).inV().id();
      if (!nodeId) continue;

      const source = {
        instanceId: instance.instanceId,
        instanceVertexId: instance.instanceVertexId,
        stateMachineId: instance.stateMachineId,
        stateEdgeId,
        nodeId,
        type,
        targets: [],
      };
      sourcesByStateEdgeId[stateEdgeId] = source;
      stateEdgeByNode.set(`${type}:${nodeId}`, source);
    }
  }

  return { sourcesByStateEdgeId, stateEdgeByNode };
}

async function buildInstanceTree({ g, rootInstanceVertexId }) {
  const byId = new Map();
  const visiting = new Set();

  async function visit(instanceVertexId) {
    if (visiting.has(instanceVertexId)) {
      throw new TypeError(`Cycle detected in component instance tree at ${instanceVertexId}`);
    }
    if (byId.has(instanceVertexId)) return byId.get(instanceVertexId);
    visiting.add(instanceVertexId);

    const [[componentId], [stateMachineId], [instanceValues], children] = await Promise.all([
      g.V(instanceVertexId).out(instanceOfLabel).id(),
      g.V(instanceVertexId).out(hasStateMachineLabel).id(),
      g.V(instanceVertexId).valueMap('instanceId'),
      readInstanceChildren({ g, instanceVertexId }),
    ]);
    const instanceId = readValue(instanceValues, 'instanceId');

    if (!componentId || !stateMachineId || typeof instanceId !== 'string' || !instanceId.length) {
      throw new TypeError(`Incomplete component instance context for ${instanceVertexId}`);
    }

    const instance = {
      componentId,
      instanceId,
      instanceVertexId,
      stateMachineId,
      children: new Map(),
      sourcesByStateEdgeId: {},
      stateEdgeByNode: new Map(),
    };
    byId.set(instanceVertexId, instance);

    for (const child of children) {
      if (instance.children.has(child.alias)) {
        throw new TypeError(`Duplicate child alias ${child.alias} for instance ${instanceId}`);
      }
      const childInstance = await visit(child.instanceVertexId);
      instance.children.set(child.alias, childInstance);
    }

    const stateSources = await readStateSources({ g, instance });
    instance.sourcesByStateEdgeId = stateSources.sourcesByStateEdgeId;
    instance.stateEdgeByNode = stateSources.stateEdgeByNode;
    visiting.delete(instanceVertexId);
    return instance;
  }

  const root = await visit(rootInstanceVertexId);
  return { root, instances: Array.from(byId.values()) };
}

function resolveAliasPath(ownerInstance, aliasPath) {
  let current = ownerInstance;
  for (const alias of aliasPath ?? []) {
    current = current?.children.get(alias);
    if (!current) return null;
  }
  return current;
}

function compareTargets(left, right) {
  return [left.instanceId, left.stateEdgeId, left.type, left.name]
    .join('\u0000')
    .localeCompare([right.instanceId, right.stateEdgeId, right.type, right.name].join('\u0000'));
}

function invalidBinding(reason, details = {}) {
  return { bound: false, reason, ...details };
}

async function buildBoundPayloads({ g, rootInstanceVertexId }) {
  const { instances } = await buildInstanceTree({ g, rootInstanceVertexId });
  const planByComponentId = new Map();
  const missingComponentIds = new Set();

  for (const ownerInstance of instances) {
    let plan = planByComponentId.get(ownerInstance.componentId);
    if (!plan) {
      plan = await readComponentInjectionRoutingIndex({
        g,
        componentId: ownerInstance.componentId,
      });
      planByComponentId.set(ownerInstance.componentId, plan);
    }
    if (!plan.found) {
      missingComponentIds.add(ownerInstance.componentId);
      continue;
    }

    for (const route of plan.routes ?? []) {
      const sourceInstance = resolveAliasPath(ownerInstance, route.source?.aliasPath);
      const targetInstance = resolveAliasPath(ownerInstance, route.target?.aliasPath);
      if (!sourceInstance || !targetInstance) {
        return invalidBinding('alias_path_unresolved', {
          componentId: ownerInstance.componentId,
          injectionEdgeId: route.injectionEdgeId,
        });
      }
      if (
        sourceInstance.componentId !== route.source.componentId
        || targetInstance.componentId !== route.target.componentId
      ) {
        return invalidBinding('component_mismatch', {
          componentId: ownerInstance.componentId,
          injectionEdgeId: route.injectionEdgeId,
        });
      }

      const source = sourceInstance.stateEdgeByNode.get(`${route.source.type}:${route.source.nodeId}`);
      const targetSource = targetInstance.stateEdgeByNode.get(`${route.target.type}:${route.target.nodeId}`);
      if (!source || !targetSource || typeof route.target.name !== 'string' || !route.target.name.length) {
        return invalidBinding('state_edge_unresolved', {
          componentId: ownerInstance.componentId,
          injectionEdgeId: route.injectionEdgeId,
        });
      }

      if (
        source.instanceId === targetSource.instanceId
        && source.stateEdgeId === targetSource.stateEdgeId
      ) continue;

      const target = {
        instanceId: targetSource.instanceId,
        instanceVertexId: targetSource.instanceVertexId,
        stateMachineId: targetSource.stateMachineId,
        stateEdgeId: targetSource.stateEdgeId,
        nodeId: targetSource.nodeId,
        type: targetSource.type,
        name: route.target.name,
      };
      const targetKey = `${target.instanceId}:${target.stateEdgeId}`;
      if (source.targets.some((candidate) => `${candidate.instanceId}:${candidate.stateEdgeId}` === targetKey)) {
        continue;
      }
      source.targets.push(target);
    }
  }

  if (missingComponentIds.size) {
    return invalidBinding('component_index_missing', {
      missingComponentIds: Array.from(missingComponentIds).sort(),
    });
  }

  const payloads = instances.map((instance) => {
    for (const source of Object.values(instance.sourcesByStateEdgeId)) {
      source.targets.sort(compareTargets);
    }
    return {
      ownerVertexId: instance.instanceVertexId,
      payload: {
        componentId: instance.componentId,
        componentPlanSchemaVersion: COMPONENT_INDEX_SCHEMA_VERSION,
        instanceId: instance.instanceId,
        instanceVertexId: instance.instanceVertexId,
        sourcesByStateEdgeId: instance.sourcesByStateEdgeId,
      },
    };
  });

  return { bound: true, payloads };
}

function bind({ g }) {
  return async function ({ rootInstanceVertexId }) {
    const built = await buildBoundPayloads({ g, rootInstanceVertexId });
    if (!built.bound) return built;

    for (const { ownerVertexId, payload } of built.payloads) {
      await upsertOwnerIndex({
        g,
        ownerVertexId,
        ownerName: 'componentInstance',
        indexVertexLabel: constants.INDEX_VERTEX_LABEL,
        ownerEdgeLabel: constants.OWNER_EDGE_LABEL,
        schemaVersion: constants.SCHEMA_VERSION,
        payload,
      });
    }

    return { bound: true, indexedInstanceCount: built.payloads.length };
  };
}

function lookup({ g }) {
  return async function ({ instanceVertexId, stateEdgeId }) {
    const result = await readOwnerIndex({
      g,
      ownerVertexId: instanceVertexId,
      indexVertexLabel: constants.INDEX_VERTEX_LABEL,
      ownerEdgeLabel: constants.OWNER_EDGE_LABEL,
    });

    if (!result.found) return { found: false };
    const payload = result.payload;
    const validPayload = result.schemaVersion === constants.SCHEMA_VERSION
      && payload
      && payload.instanceVertexId === instanceVertexId
      && payload.componentPlanSchemaVersion === COMPONENT_INDEX_SCHEMA_VERSION
      && typeof payload.instanceId === 'string'
      && payload.instanceId.length
      && payload.sourcesByStateEdgeId
      && typeof payload.sourcesByStateEdgeId === 'object'
      && !Array.isArray(payload.sourcesByStateEdgeId);
    if (!validPayload) {
      return { found: false, indexFound: true, stale: true };
    }

    const source = payload.sourcesByStateEdgeId[stateEdgeId];
    if (!source) return { found: false, indexFound: true };
    if (
      source.instanceVertexId !== instanceVertexId
      || source.stateEdgeId !== stateEdgeId
      || !Array.isArray(source.targets)
    ) {
      return { found: false, indexFound: true, stale: true };
    }

    return {
      found: true,
      source,
      targets: source.targets,
      schemaVersion: result.schemaVersion,
      builtAt: result.builtAt,
    };
  };
}

export function componentInstanceInjectionRouting({ g, diagnostics }) {
  return {
    bind: bind({ g, diagnostics }),
    lookup: lookup({ g, diagnostics }),
  };
}

export const meta = {
  schema,
  ownerEdgeSchema,
  constants,
};
