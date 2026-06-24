import { meta as edge } from '../edge/index.js';

export function readParentStateMachineId({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .out(edge.has_stateMachine.componentInstance_stateMachine.constants.LABEL)
    .id();
}
