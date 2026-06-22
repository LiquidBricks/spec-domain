export function readComponentHash({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).valueMap('hash');
}
