import { meta as edge } from '../edge/index.js';

export function findDependencyDeferredTargetNodeIdByName({ g }) {
  return ({ name, vertexId }) => g
    .V(vertexId)
    .out(edge.has_deferred.component_deferred.constants.LABEL)
    .has('name', name)
    .id();
}
