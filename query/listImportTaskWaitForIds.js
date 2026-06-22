export function listImportTaskWaitForIds({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).out(domain.edge.wait_for.importRef_task.constants.LABEL).id();
}
