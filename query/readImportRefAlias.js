export function readImportRefAlias({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).valueMap('alias');
}
