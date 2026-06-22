export function markStateMachineCompleteState({ g, domain }) {
  return ({ stateMachineId }) => g.V(stateMachineId).property('state', domain.vertex.stateMachine.constants.STATES.COMPLETE);
}
