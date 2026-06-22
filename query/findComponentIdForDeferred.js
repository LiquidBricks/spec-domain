export function findComponentIdForDeferred({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).in(domain.edge.has_deferred.component_deferred.constants.LABEL).id();
}
