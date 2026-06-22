export function readDataTaskDeps({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).out(domain.edge.has_dependency.data_task.constants.LABEL).id();
}
