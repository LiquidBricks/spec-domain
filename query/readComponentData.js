import { meta as edge } from '../edge/index.js';

export function readComponentData({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .out(edge.has_data.component_data.constants.LABEL)
    .id();
}
