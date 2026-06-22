export function listImportedInstanceIds({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).out(domain.edge.uses_import.componentInstance_importInstanceRef.constants.LABEL).out(domain.edge.uses_import.importInstanceRef_componentInstance.constants.LABEL).id();
}
