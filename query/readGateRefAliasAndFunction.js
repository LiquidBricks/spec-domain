export function readGateRefAliasAndFunction({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .valueMap('alias', 'fnc');
}
