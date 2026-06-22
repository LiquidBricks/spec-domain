export function listImportInstanceRefIds({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).out(domain.edge.uses_import.componentInstance_importInstanceRef.constants.LABEL).id();
}
