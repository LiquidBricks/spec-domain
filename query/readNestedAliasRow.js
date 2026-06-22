export function readNestedAliasRow({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).valueMap('alias');
}
