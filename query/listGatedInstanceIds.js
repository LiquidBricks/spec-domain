export function listGatedInstanceIds({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).out(domain.edge.uses_gate.componentInstance_gateInstanceRef.constants.LABEL).out(domain.edge.uses_gate.gateInstanceRef_componentInstance.constants.LABEL).id();
}
