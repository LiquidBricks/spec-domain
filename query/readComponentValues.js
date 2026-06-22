export function readComponentValues({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).valueMap('hash');
}
