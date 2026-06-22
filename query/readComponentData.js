export function readComponentData({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).out(domain.edge.has_data.component_data.constants.LABEL).id();
}
