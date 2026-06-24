import { meta as edge } from '../edge/index.js';

export function readStateMachineTaskIds({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .out(edge.has_task_state.stateMachine_task.constants.LABEL)
    .id();
}
