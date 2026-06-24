import { meta as edge } from '../edge/index.js';

export function readComponentDeferred({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .out(edge.has_deferred.component_deferred.constants.LABEL)
    .id();
}
