import { meta as edge } from '../edge/index.js';

export function readStateMachineDataIds({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .out(edge.has_data_state.stateMachine_data.constants.LABEL)
    .id();
}
