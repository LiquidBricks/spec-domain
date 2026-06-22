export function listDepsDataIds({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).out(domain.edge.has_dependency.gateRef_data.constants.LABEL).id();
}
