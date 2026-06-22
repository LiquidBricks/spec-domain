export function findHasDependencyDataDeferred({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).out(domain.edge.has_dependency.data_deferred.constants.LABEL).id();
}
