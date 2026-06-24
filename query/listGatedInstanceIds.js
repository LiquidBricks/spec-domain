import { meta as edge } from '../edge/index.js';

export function listGatedInstanceIds({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .out(edge.uses_gate.componentInstance_gateInstanceRef.constants.LABEL)
    .out(edge.uses_gate.gateInstanceRef_componentInstance.constants.LABEL)
    .id();
}
