import { meta as edge } from '../edge/index.js';

export function readTaskADataInjects({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .out(edge.injects_into.task_data.constants.LABEL)
    .id();
}
