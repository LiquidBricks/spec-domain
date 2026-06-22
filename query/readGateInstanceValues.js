export function readGateInstanceValues({ g, domain }) {
  return ({ vertexId, alias }) => g.V(vertexId).out(domain.edge.uses_gate.componentInstance_gateInstanceRef.constants.LABEL).filter(_ => _.out(domain.edge.uses_gate.gateInstanceRef_gateRef.constants.LABEL).has('alias', alias)).out(domain.edge.uses_gate.gateInstanceRef_componentInstance.constants.LABEL).valueMap('instanceId');
}
