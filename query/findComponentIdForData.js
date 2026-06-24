import { meta as edge } from '../edge/index.js';

export function findComponentIdForData({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .in(edge.has_data.component_data.constants.LABEL)
    .id();
}
