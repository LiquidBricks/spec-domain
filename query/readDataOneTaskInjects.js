import { meta as edge } from '../edge/index.js';

export function readDataOneTaskInjects({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .out(edge.injects_into.data_task.constants.LABEL)
    .id();
}
