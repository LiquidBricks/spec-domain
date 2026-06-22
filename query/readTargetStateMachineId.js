export function readTargetStateMachineId({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).out(domain.edge.has_stateMachine.componentInstance_stateMachine.constants.LABEL).id();
}
