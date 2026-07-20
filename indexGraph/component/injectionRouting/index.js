import { normalizeAliasPath, readOwnerIndex, readValue, upsertOwnerIndex } from '../../_shared/ownerIndex.js';
import { LABEL as dataLabel } from '../../../vertex/data/constants.js';
import { LABEL as taskLabel } from '../../../vertex/task/constants.js';
import { LABEL as componentDataEdgeLabel } from '../../../edge/has_data/component_data/constants.js';
import { LABEL as componentTaskEdgeLabel } from '../../../edge/has_task/component_task/constants.js';
import * as constants from './constants.js';
import { ownerEdgeSchema, schema } from './schema.js';

function compareRoutes(left, right) {
  return [
    left.source.aliasPath.join('.'),
    left.source.type,
    left.source.nodeId,
    left.target.aliasPath.join('.'),
    left.target.type,
    left.target.nodeId,
    left.injectionEdgeId,
  ].join('\u0000').localeCompare([
    right.source.aliasPath.join('.'),
    right.source.type,
    right.source.nodeId,
    right.target.aliasPath.join('.'),
    right.target.type,
    right.target.nodeId,
    right.injectionEdgeId,
  ].join('\u0000'));
}

async function readNode({ g, nodeId, type }) {
  const expectedLabel = type === 'data' ? dataLabel : taskLabel;
  const ownerEdgeLabel = type === 'data' ? componentDataEdgeLabel : componentTaskEdgeLabel;
  const [label] = await g.V(nodeId).label();

  if (label !== expectedLabel) {
    throw new TypeError(`Injection ${type} node has unexpected label: ${nodeId}`);
  }

  const [[componentId], [row]] = await Promise.all([
    g.V(nodeId).in(ownerEdgeLabel).id(),
    g.V(nodeId).valueMap('name'),
  ]);
  const name = readValue(row, 'name');

  if (typeof componentId !== 'string' || !componentId.length) {
    throw new TypeError(`Injection ${type} node has no owning component: ${nodeId}`);
  }
  if (typeof name !== 'string' || !name.length) {
    throw new TypeError(`Injection ${type} node has no name: ${nodeId}`);
  }

  return {
    type,
    nodeId,
    componentId,
    name,
  };
}

async function readCanonicalRoutes({ g, componentId }) {
  const routes = [];

  for (const { label, sourceType, targetType } of constants.INJECTION_EDGE_TYPES) {
    const edgeIds = await g.E().has('label', label).id();

    for (const injectionEdgeId of edgeIds ?? []) {
      const [[edgeValues], [sourceNodeId], [targetNodeId]] = await Promise.all([
        g.E(injectionEdgeId).valueMap('ownerComponentId', 'sourceAliasPath', 'targetAliasPath'),
        g.E(injectionEdgeId).outV().id(),
        g.E(injectionEdgeId).inV().id(),
      ]);

      if (readValue(edgeValues, 'ownerComponentId') !== componentId) continue;
      if (!sourceNodeId || !targetNodeId) continue;

      const [source, target] = await Promise.all([
        readNode({ g, nodeId: sourceNodeId, type: sourceType }),
        readNode({ g, nodeId: targetNodeId, type: targetType }),
      ]);

      routes.push({
        injectionEdgeId,
        source: {
          ...source,
          aliasPath: normalizeAliasPath(readValue(edgeValues, 'sourceAliasPath')),
        },
        target: {
          ...target,
          aliasPath: normalizeAliasPath(readValue(edgeValues, 'targetAliasPath')),
        },
      });
    }
  }

  return routes.sort(compareRoutes);
}

export async function readComponentInjectionRoutingIndex({ g, componentId }) {
  const result = await readOwnerIndex({
    g,
    ownerVertexId: componentId,
    indexVertexLabel: constants.INDEX_VERTEX_LABEL,
    ownerEdgeLabel: constants.OWNER_EDGE_LABEL,
  });

  if (!result.found) {
    return {
      ...result,
      componentId,
      componentHash: null,
      routes: [],
    };
  }

  const payload = result.payload;
  const routesAreValid = Array.isArray(payload?.routes)
    && payload.routes.every(route => (
      typeof route?.injectionEdgeId === 'string'
      && route.injectionEdgeId.length
      && [route.source, route.target].every(endpoint => (
        endpoint
        && (endpoint.type === 'data' || endpoint.type === 'task')
        && typeof endpoint.nodeId === 'string'
        && endpoint.nodeId.length
        && typeof endpoint.componentId === 'string'
        && endpoint.componentId.length
        && typeof endpoint.name === 'string'
        && endpoint.name.length
        && Array.isArray(endpoint.aliasPath)
        && endpoint.aliasPath.every(alias => typeof alias === 'string' && alias.length)
      ))
    ));
  const valid = result.schemaVersion === constants.SCHEMA_VERSION
    && payload
    && payload.componentId === componentId
    && typeof payload.componentHash === 'string'
    && payload.componentHash.length
    && routesAreValid;

  if (!valid) {
    return {
      ...result,
      found: false,
      indexFound: true,
      stale: true,
      componentId,
      componentHash: null,
      routes: [],
    };
  }

  return {
    ...result,
    componentId: payload.componentId,
    componentHash: payload.componentHash,
    routes: payload.routes,
  };
}

function compile({ g }) {
  return async function ({ componentId }) {
    const existing = await readComponentInjectionRoutingIndex({ g, componentId });
    if (existing.found) {
      return {
        ...existing,
        compiled: false,
      };
    }

    const [[componentValues], routes] = await Promise.all([
      g.V(componentId).valueMap('hash'),
      readCanonicalRoutes({ g, componentId }),
    ]);
    const componentHash = readValue(componentValues, 'hash');
    if (typeof componentHash !== 'string' || !componentHash.length) {
      throw new TypeError(`Component hash missing for injection index: ${componentId}`);
    }

    const result = await upsertOwnerIndex({
      g,
      ownerVertexId: componentId,
      ownerName: 'component',
      indexVertexLabel: constants.INDEX_VERTEX_LABEL,
      ownerEdgeLabel: constants.OWNER_EDGE_LABEL,
      schemaVersion: constants.SCHEMA_VERSION,
      payload: { componentId, componentHash, routes },
    });

    return {
      ...result,
      componentId,
      componentHash,
      routes,
      compiled: true,
    };
  };
}

function read({ g }) {
  return ({ componentId }) => readComponentInjectionRoutingIndex({ g, componentId });
}

export function componentInjectionRouting({ g, diagnostics }) {
  return {
    compile: compile({ g, diagnostics }),
    read: read({ g, diagnostics }),
  };
}

export const meta = {
  schema,
  ownerEdgeSchema,
  constants,
};
