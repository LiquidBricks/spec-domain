import { meta as edge } from '../edge/index.js';

export function findGateInstanceRefIdByAlias({ g }) {
  return ({ vertexId, alias }) => g
    .V(vertexId)
    .out(edge.uses_gate.componentInstance_gateInstanceRef.constants.LABEL)
    .filter(_ => _.out(edge.uses_gate.gateInstanceRef_gateRef.constants.LABEL).has('alias', alias))
    .id();
}
