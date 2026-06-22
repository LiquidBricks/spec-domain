export function readImportedComponentValues({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).valueMap('hash');
}
