export function readTask1DataDeps({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).out(domain.edge.has_dependency.task_data.constants.LABEL).id();
}
