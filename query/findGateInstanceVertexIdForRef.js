export function findGateInstanceVertexIdForRef({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).out(domain.edge.uses_gate.gateInstanceRef_componentInstance.constants.LABEL).id();
}
