export function readNext({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).out(domain.edge.uses_import.importInstanceRef_componentInstance.constants.LABEL).id();
}
