export function readNestedAliasRow({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .valueMap('alias');
}
