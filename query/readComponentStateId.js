import { meta as edge } from '../edge/index.js';

export function readComponentStateId({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .out(edge.has_snapshot.componentInstance_componentState.constants.LABEL)
    .id();
}
