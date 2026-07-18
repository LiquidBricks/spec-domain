import { meta as edge } from '../edge/index.js';

export function listGateStateEdgeIds({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .outE(edge.has_gate_state.stateMachine_gateInstanceRef.constants.LABEL)
    .id();
}
