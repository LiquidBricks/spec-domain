import { meta as edge } from '../edge/index.js';

export function listGateRefIds({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .out(edge.has_gate.component_gateRef.constants.LABEL)
    .id();
}
