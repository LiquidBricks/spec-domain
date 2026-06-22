export function listGateInstanceRefIds({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).out(domain.edge.uses_gate.componentInstance_gateInstanceRef.constants.LABEL).id();
}
