import { meta as edge } from '../edge/index.js';

export function listDependentTaskNodeIdsForTask({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .in(
      edge.has_dependency.task_task.constants.LABEL,
      edge.wait_for.task_task.constants.LABEL,
    )
    .id();
}
