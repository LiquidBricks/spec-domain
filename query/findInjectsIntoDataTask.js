export function findInjectsIntoDataTask({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).out(domain.edge.injects_into.data_task.constants.LABEL).id();
}
