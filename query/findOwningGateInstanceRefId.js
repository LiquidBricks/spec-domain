export function findOwningGateInstanceRefId({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).in(domain.edge.uses_gate.gateInstanceRef_componentInstance.constants.LABEL).id();
}
