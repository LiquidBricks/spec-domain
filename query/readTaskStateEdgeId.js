export function readTaskStateEdgeId({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).outE(domain.edge.has_task_state.stateMachine_task.constants.LABEL).id();
}
