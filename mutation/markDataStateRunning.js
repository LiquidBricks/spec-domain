export function markDataStateRunning({ g, domain }) {
  return ({ updatedAt, vertexId }) => g.V(vertexId).property('status', domain.edge.has_data_state.stateMachine_data.constants.Status.RUNNING).property('updatedAt', updatedAt);
}
