export function findParentImportId({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).in(domain.edge.uses_import.importInstanceRef_componentInstance.constants.LABEL).in(domain.edge.uses_import.componentInstance_importInstanceRef.constants.LABEL).id();
}
