export function readStateMachineDataIds({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).out(domain.edge.has_data_state.stateMachine_data.constants.LABEL).id();
}
