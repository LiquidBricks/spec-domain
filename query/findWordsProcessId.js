export function findWordsProcessId({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).out(domain.edge.has_task.component_task.constants.LABEL).has('name', 'process').id();
}
