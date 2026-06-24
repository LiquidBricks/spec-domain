import { meta as edge } from '../edge/index.js';

export function findHasDependencyDataData({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .out(edge.has_dependency.data_data.constants.LABEL)
    .id();
}
