export function markTaskStateRunning({ g, domain }) {
  return ({ updatedAt, vertexId }) => g.V(vertexId).property('status', domain.edge.has_task_state.stateMachine_task.constants.Status.RUNNING).property('updatedAt', updatedAt);
}
