export function readImportRefValues({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).valueMap('alias');
}
