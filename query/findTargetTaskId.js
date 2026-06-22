export function findTargetTaskId({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).out(domain.edge.has_task.component_task.constants.LABEL).has('name', 'targetTask').id();
}
