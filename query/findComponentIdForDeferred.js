import { meta as edge } from '../edge/index.js';

export function findComponentIdForDeferred({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .in(edge.has_deferred.component_deferred.constants.LABEL)
    .id();
}
