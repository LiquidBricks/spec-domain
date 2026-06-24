import { meta as edge } from '../edge/index.js';

export function readTaskTargets({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .out(edge.injects_into.task_task.constants.LABEL)
    .id();
}
