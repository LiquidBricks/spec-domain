export function findImportInstanceRefIdByAlias({ g, domain }) {
  return ({ vertexId, alias }) => g.V(vertexId).out(domain.edge.uses_import.componentInstance_importInstanceRef.constants.LABEL).filter(_ => _.out(domain.edge.uses_import.importInstanceRef_importRef.constants.LABEL).has('alias', alias)).id();
}
