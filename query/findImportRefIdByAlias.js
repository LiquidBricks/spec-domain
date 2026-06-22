export function findImportRefIdByAlias({ g, domain }) {
  return ({ alias, vertexId }) => g.V(vertexId).out(domain.edge.has_import.component_importRef.constants.LABEL).has('alias', alias).id();
}
