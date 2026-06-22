export function findGateRefIdByAlias({ g, domain }) {
  return ({ alias, vertexId }) => g.V(vertexId).out(domain.edge.has_gate.component_gateRef.constants.LABEL).has('alias', alias).id();
}
