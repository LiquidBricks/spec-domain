import { meta as edge } from '../edge/index.js';

export function readDataOneDataInjects({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .out(edge.injects_into.data_data.constants.LABEL)
    .id();
}
