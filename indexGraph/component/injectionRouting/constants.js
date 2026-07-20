export const INDEX_VERTEX_LABEL = 'index.vertex.component.injectionRouting';
export const OWNER_EDGE_LABEL = 'index.edge.component.has_injectionRouting';
export const SCHEMA_VERSION = 1;

export const INJECTION_EDGE_TYPES = Object.freeze([
  Object.freeze({ sourceType: 'data', targetType: 'data', label: 'domain.edge.injects_into.data__data' }),
  Object.freeze({ sourceType: 'data', targetType: 'task', label: 'domain.edge.injects_into.data__task' }),
  Object.freeze({ sourceType: 'task', targetType: 'data', label: 'domain.edge.injects_into.task__data' }),
  Object.freeze({ sourceType: 'task', targetType: 'task', label: 'domain.edge.injects_into.task__task' }),
]);
