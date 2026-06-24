import { meta as edge } from '../edge/index.js';

export function readGateInstanceRefs({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .out(edge.uses_gate.componentInstance_gateInstanceRef.constants.LABEL)
    .id();
}
