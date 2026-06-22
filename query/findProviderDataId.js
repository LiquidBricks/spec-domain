export function findProviderDataId({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).out(domain.edge.has_data.component_data.constants.LABEL).has('name', 'providerData').id();
}
