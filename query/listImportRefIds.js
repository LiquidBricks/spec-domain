export function listImportRefIds({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).out(domain.edge.has_import.component_importRef.constants.LABEL).id();
}
