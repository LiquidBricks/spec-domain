import { meta as edge } from '../edge/index.js';

export function listDataDependencyNodeIds({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .out(
      edge.has_dependency.data_task.constants.LABEL,
      edge.has_dependency.data_data.constants.LABEL,
      edge.has_dependency.data_deferred.constants.LABEL,
    )
    .id();
}
