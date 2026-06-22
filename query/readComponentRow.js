export function readComponentRow({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).valueMap('hash');
}
