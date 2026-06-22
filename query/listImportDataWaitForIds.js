export function listImportDataWaitForIds({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).out(domain.edge.wait_for.importRef_data.constants.LABEL).id();
}
