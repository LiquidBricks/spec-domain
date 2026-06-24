import { meta as edge } from '../edge/index.js';

export function findHasDependencyTaskTask({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .out(edge.has_dependency.task_task.constants.LABEL)
    .id();
}
