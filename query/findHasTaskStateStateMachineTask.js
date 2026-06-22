export function findHasTaskStateStateMachineTask({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).outE(domain.edge.has_task_state.stateMachine_task.constants.LABEL).filter(_ => _.inV().not(__ => __.out(domain.edge.has_dependency.task_task.constants.LABEL, domain.edge.has_dependency.task_data.constants.LABEL, domain.edge.has_dependency.task_deferred.constants.LABEL, domain.edge.wait_for.task_task.constants.LABEL, domain.edge.wait_for.task_data.constants.LABEL))).id();
}
