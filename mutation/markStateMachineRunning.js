export function markStateMachineRunning({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).property('state', domain.vertex.stateMachine.constants.STATES.RUNNING).property('updatedAt', new Date().toISOString());
}
