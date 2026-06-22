export function readDataOneDataInjects({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).out(domain.edge.injects_into.data_data.constants.LABEL).id();
}
