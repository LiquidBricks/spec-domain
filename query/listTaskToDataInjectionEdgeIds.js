import { meta as edge } from '../edge/index.js';

export function listTaskToDataInjectionEdgeIds({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .outE(edge.injects_into.task_data.constants.LABEL)
    .id();
}
