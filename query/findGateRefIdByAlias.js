import { meta as edge } from '../edge/index.js';

export function findGateRefIdByAlias({ g }) {
  return ({ alias, vertexId }) => g
    .V(vertexId)
    .out(edge.has_gate.component_gateRef.constants.LABEL)
    .has('alias', alias)
    .id();
}
