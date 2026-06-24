import { meta as edge } from '../edge/index.js';

export function listParentGateInstanceIds({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .in(edge.uses_gate.gateInstanceRef_componentInstance.constants.LABEL)
    .in(edge.uses_gate.componentInstance_gateInstanceRef.constants.LABEL)
    .id();
}
