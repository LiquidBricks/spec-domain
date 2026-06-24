import { meta as edge } from '../edge/index.js';

export function findGatedComponentIdForGateRef({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .out(edge.gate_of.gateRef_component.constants.LABEL)
    .id();
}
