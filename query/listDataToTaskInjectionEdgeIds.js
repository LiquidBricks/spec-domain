import { meta as edge } from '../edge/index.js';

export function listDataToTaskInjectionEdgeIds({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .outE(edge.injects_into.data_task.constants.LABEL)
    .id();
}
