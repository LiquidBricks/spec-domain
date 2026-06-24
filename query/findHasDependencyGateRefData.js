import { meta as edge } from '../edge/index.js';

export function findHasDependencyGateRefData({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .out(edge.has_dependency.gateRef_data.constants.LABEL)
    .id();
}
