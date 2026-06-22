export function readStateMachineTaskIds({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).out(domain.edge.has_task_state.stateMachine_task.constants.LABEL).id();
}
