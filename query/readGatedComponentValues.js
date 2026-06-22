export function readGatedComponentValues({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).valueMap('hash');
}
