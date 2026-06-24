import { meta as edge } from '../edge/index.js';

export function findGatedInstanceVertexIdForRef({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .out(edge.uses_gate.gateInstanceRef_componentInstance.constants.LABEL)
    .id();
}
