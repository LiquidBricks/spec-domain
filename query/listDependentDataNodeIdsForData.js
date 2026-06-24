import { meta as edge } from '../edge/index.js';

export function listDependentDataNodeIdsForData({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .in(
      edge.has_dependency.data_data.constants.LABEL,
      edge.wait_for.data_data.constants.LABEL,
    )
    .id();
}
