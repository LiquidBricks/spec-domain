import { meta as edge } from '../edge/index.js';

export function listDataDependencyAndWaitForNodeIds({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .out(
      edge.has_dependency.data_task.constants.LABEL,
      edge.has_dependency.data_data.constants.LABEL,
      edge.has_dependency.data_deferred.constants.LABEL,
      edge.wait_for.data_task.constants.LABEL,
      edge.wait_for.data_data.constants.LABEL,
    )
    .id();
}
