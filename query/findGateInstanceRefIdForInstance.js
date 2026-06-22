export function findGateInstanceRefIdForInstance({ g, domain }) {
  return ({ vertexId, id }) => g.V(vertexId).out(domain.edge.uses_gate.componentInstance_gateInstanceRef.constants.LABEL).filter(_ => _.out(domain.edge.uses_gate.gateInstanceRef_componentInstance.constants.LABEL).has('id', id)).id();
}
