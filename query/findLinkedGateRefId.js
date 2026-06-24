import { meta as edge } from '../edge/index.js';

export function findLinkedGateRefId({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .out(edge.uses_gate.gateInstanceRef_gateRef.constants.LABEL)
    .id();
}
