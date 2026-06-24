import { meta as edge } from '../edge/index.js';

export function findHasDependencyTaskData({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .out(edge.has_dependency.task_data.constants.LABEL)
    .id();
}
