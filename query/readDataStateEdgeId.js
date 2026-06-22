export function readDataStateEdgeId({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).outE(domain.edge.has_data_state.stateMachine_data.constants.LABEL).id();
}
