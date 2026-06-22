export function listGateRefIds({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).out(domain.edge.has_gate.component_gateRef.constants.LABEL).id();
}
