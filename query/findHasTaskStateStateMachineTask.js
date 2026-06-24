import { meta as edge } from '../edge/index.js';

export function findHasTaskStateStateMachineTask({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .outE(edge.has_task_state.stateMachine_task.constants.LABEL)
    .filter(_ => _.inV().not(__ => __.out(edge.has_dependency.task_task.constants.LABEL, edge.has_dependency.task_data.constants.LABEL, edge.has_dependency.task_deferred.constants.LABEL, edge.wait_for.task_task.constants.LABEL, edge.wait_for.task_data.constants.LABEL)))
    .id();
}
