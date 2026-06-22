export function findImportInstanceRefIdForInstance({ g, domain }) {
  return ({ vertexId, id }) => g.V(vertexId).out(domain.edge.uses_import.componentInstance_importInstanceRef.constants.LABEL).filter(_ => _.out(domain.edge.uses_import.importInstanceRef_componentInstance.constants.LABEL).has('id', id)).id();
}
