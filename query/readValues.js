export function readValues({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).valueMap('alias');
}
