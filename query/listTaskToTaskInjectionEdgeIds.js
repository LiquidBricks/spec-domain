import { meta as edge } from '../edge/index.js';

export function listTaskToTaskInjectionEdgeIds({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .outE(edge.injects_into.task_task.constants.LABEL)
    .id();
}
