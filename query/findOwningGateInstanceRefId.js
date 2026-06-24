import { meta as edge } from '../edge/index.js';

export function findOwningGateInstanceRefId({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .in(edge.uses_gate.gateInstanceRef_componentInstance.constants.LABEL)
    .id();
}
