export function readTaskADataInjects({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).out(domain.edge.injects_into.task_data.constants.LABEL).id();
}
