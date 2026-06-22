export function findGateRefIdForInstanceRef({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).out(domain.edge.uses_gate.gateInstanceRef_gateRef.constants.LABEL).id();
}
