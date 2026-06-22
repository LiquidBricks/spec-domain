export function findGatedComponentIdForGateRef({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).out(domain.edge.gate_of.gateRef_component.constants.LABEL).id();
}
