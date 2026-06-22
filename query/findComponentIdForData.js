export function findComponentIdForData({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).in(domain.edge.has_data.component_data.constants.LABEL).id();
}
