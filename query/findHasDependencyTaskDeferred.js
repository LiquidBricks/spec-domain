import { meta as edge } from '../edge/index.js';

export function findHasDependencyTaskDeferred({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .out(edge.has_dependency.task_deferred.constants.LABEL)
    .id();
}
