export function markStateMachineComplete({ g, domain }) {
  return ({ updatedAt, vertexId }) => g.V(vertexId).property('state', domain.vertex.stateMachine.constants.STATES.COMPLETE).property('updatedAt', updatedAt);
}
