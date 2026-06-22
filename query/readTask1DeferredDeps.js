export function readTask1DeferredDeps({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).out(domain.edge.has_dependency.task_deferred.constants.LABEL).id();
}
