export function listGateParentInstanceVertexIds({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).in(domain.edge.uses_gate.gateInstanceRef_componentInstance.constants.LABEL).in(domain.edge.uses_gate.componentInstance_gateInstanceRef.constants.LABEL).id();
}
