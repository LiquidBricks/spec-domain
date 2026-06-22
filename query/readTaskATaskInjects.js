export function readTaskATaskInjects({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).out(domain.edge.injects_into.task_task.constants.LABEL).id();
}
