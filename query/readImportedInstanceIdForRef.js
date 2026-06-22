export function readImportedInstanceIdForRef({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).out(domain.edge.uses_import.importInstanceRef_componentInstance.constants.LABEL).valueMap('instanceId');
}
