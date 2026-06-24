import { meta as edge } from '../edge/index.js';

export function listDependentDataNodeIdsForTask({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .in(
      edge.has_dependency.data_task.constants.LABEL,
      edge.wait_for.data_task.constants.LABEL,
    )
    .id();
}
