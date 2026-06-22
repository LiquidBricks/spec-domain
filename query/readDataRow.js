export function readDataRow({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).valueMap('name');
}
