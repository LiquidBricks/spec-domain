export function readComponentDeferred({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).out(domain.edge.has_deferred.component_deferred.constants.LABEL).id();
}
