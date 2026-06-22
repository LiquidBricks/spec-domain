export function listWaitForDataIds({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).out(domain.edge.wait_for.gateRef_data.constants.LABEL).id();
}
