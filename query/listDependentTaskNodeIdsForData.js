import { meta as edge } from '../edge/index.js';

export function listDependentTaskNodeIdsForData({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .in(
      edge.has_dependency.task_data.constants.LABEL,
      edge.wait_for.task_data.constants.LABEL,
    )
    .id();
}
