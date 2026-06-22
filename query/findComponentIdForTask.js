export function findComponentIdForTask({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).in(domain.edge.has_task.component_task.constants.LABEL).id();
}
