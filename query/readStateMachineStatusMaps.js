import { meta as edge } from '../edge/index.js';

export function readStateMachineStatusMaps({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .outE(
      edge.has_task_state.stateMachine_task.constants.LABEL,
      edge.has_data_state.stateMachine_data.constants.LABEL,
    )
    .valueMap('status');
}
