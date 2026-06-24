import { meta as edge } from '../edge/index.js';

export function listDataToDataInjectionEdgeIds({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .outE(edge.injects_into.data_data.constants.LABEL)
    .id();
}
