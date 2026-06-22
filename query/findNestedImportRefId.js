export function findNestedImportRefId({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).out(domain.edge.uses_import.importInstanceRef_importRef.constants.LABEL).id();
}
