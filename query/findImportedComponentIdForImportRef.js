export function findImportedComponentIdForImportRef({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).out(domain.edge.import_of.importRef_component.constants.LABEL).id();
}
