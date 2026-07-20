import { INDEX_VERTEX_LABEL, OWNER_EDGE_LABEL, SCHEMA_VERSION } from './constants.js';

const endpointSchema = {
  type: 'object',
  additionalProperties: false,
  required: ['type', 'nodeId', 'componentId', 'name', 'aliasPath'],
  properties: {
    type: { type: 'string', enum: ['data', 'task'] },
    nodeId: { type: 'string' },
    componentId: { type: 'string' },
    name: { type: 'string' },
    aliasPath: {
      type: 'array',
      items: { type: 'string' },
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
      required: ['componentId', 'componentHash', 'routes'],
      properties: {
        componentId: { type: 'string' },
        componentHash: { type: 'string' },
        routes: {
          type: 'array',
          items: {
            type: 'object',
            additionalProperties: false,
            required: ['injectionEdgeId', 'source', 'target'],
            properties: {
              injectionEdgeId: { type: 'string' },
              source: endpointSchema,
              target: endpointSchema,
            },
          },
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
