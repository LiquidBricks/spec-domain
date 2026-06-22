export function listTaskNodeIds({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).out(domain.edge.has_task.component_task.constants.LABEL).id();
}
