export function findHasDataStateStateMachineData({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).outE(domain.edge.has_data_state.stateMachine_data.constants.LABEL).filter(_ => _.inV().not(__ => __.out(domain.edge.has_dependency.data_task.constants.LABEL, domain.edge.has_dependency.data_data.constants.LABEL, domain.edge.has_dependency.data_deferred.constants.LABEL, domain.edge.wait_for.data_task.constants.LABEL, domain.edge.wait_for.data_data.constants.LABEL))).id();
}
