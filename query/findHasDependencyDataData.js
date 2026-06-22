export function findHasDependencyDataData({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).out(domain.edge.has_dependency.data_data.constants.LABEL).id();
}
