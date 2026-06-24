import { meta as edge } from '../edge/index.js';

export function listTaskDependencyAndWaitForNodeIds({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .out(
      edge.has_dependency.task_task.constants.LABEL,
      edge.has_dependency.task_data.constants.LABEL,
      edge.has_dependency.task_deferred.constants.LABEL,
      edge.wait_for.task_task.constants.LABEL,
      edge.wait_for.task_data.constants.LABEL,
    )
    .id();
}
