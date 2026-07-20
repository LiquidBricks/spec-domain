import { INDEX_VERTEX_LABEL, OWNER_EDGE_LABEL, SCHEMA_VERSION } from './constants.js';
import { SCHEMA_VERSION as COMPONENT_INDEX_SCHEMA_VERSION } from '../../component/injectionRouting/constants.js';

const targetSchema = {
  type: 'object',
  additionalProperties: false,
  required: [
    'instanceId',
    'instanceVertexId',
    'stateMachineId',
    'stateEdgeId',
    'nodeId',
    'type',
    'name',
  ],
  properties: {
    instanceId: { type: 'string' },
    instanceVertexId: { type: 'string' },
    stateMachineId: { type: 'string' },
    stateEdgeId: { type: 'string' },
    nodeId: { type: 'string' },
    type: { type: 'string', enum: ['data', 'task'] },
    name: { type: 'string' },
  },
};

const sourceSchema = {
  type: 'object',
  additionalProperties: false,
  required: [
    'instanceId',
    'instanceVertexId',
    'stateMachineId',
    'stateEdgeId',
    'nodeId',
    'type',
    'targets',
  ],
  properties: {
    instanceId: { type: 'string' },
    instanceVertexId: { type: 'string' },
    stateMachineId: { type: 'string' },
    stateEdgeId: { type: 'string' },
    nodeId: { type: 'string' },
    type: { type: 'string', enum: ['data', 'task'] },
    targets: {
      type: 'array',
      items: targetSchema,
    },
  },
};

export const schema = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  title: INDEX_VERTEX_LABEL,
  type: 'object',
  additionalProperties: false,
  required: ['schemaVersion', 'builtAt', 'payload'],
  properties: {
    schemaVersion: { const: SCHEMA_VERSION },
    builtAt: { type: 'string', format: 'date-time' },
    payload: {
      type: 'object',
      additionalProperties: false,
      required: [
        'componentId',
        'componentPlanSchemaVersion',
        'instanceId',
        'instanceVertexId',
        'sourcesByStateEdgeId',
      ],
      properties: {
        componentId: { type: 'string' },
        componentPlanSchemaVersion: { const: COMPONENT_INDEX_SCHEMA_VERSION },
        instanceId: { type: 'string' },
        instanceVertexId: { type: 'string' },
        sourcesByStateEdgeId: {
          type: 'object',
          additionalProperties: sourceSchema,
        },
      },
    },
  },
};

export const ownerEdgeSchema = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  title: OWNER_EDGE_LABEL,
  type: 'object',
  additionalProperties: false,
  required: ['createdAt', 'updatedAt'],
  properties: {
    createdAt: { type: 'string', format: 'date-time' },
    updatedAt: { type: 'string', format: 'date-time' },
  },
};
