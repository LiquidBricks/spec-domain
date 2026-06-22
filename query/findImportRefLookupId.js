export function findImportRefLookupId({ g, domain }) {
  return ({ alias, vertexId, id }) => g.V(vertexId).out(domain.edge.has_import.component_importRef.constants.LABEL).has('alias', alias).filter(_ => _.out(domain.edge.import_of.importRef_component.constants.LABEL).has('id', id)).id();
}
