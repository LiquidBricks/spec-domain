export function readGateRefAliasAndName({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .valueMap('alias', 'name');
}
