export function findHasDependencyTaskDeferred({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).out(domain.edge.has_dependency.task_deferred.constants.LABEL).id();
}
