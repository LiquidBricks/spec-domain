import { meta as edge } from '../edge/index.js';

export function findHasDependencyDataDeferred({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .out(edge.has_dependency.data_deferred.constants.LABEL)
    .id();
}
