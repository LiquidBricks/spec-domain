export function findDataStateEdgeIdByName({ g, domain }) {
  return ({ vertexId, name }) => g.V(vertexId).outE(domain.edge.has_data_state.stateMachine_data.constants.LABEL).filter(_ => _.inV().has('name', name)).id();
}
