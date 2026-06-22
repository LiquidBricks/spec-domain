export function readGateRefAliasAndFunction({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).valueMap('alias', 'fnc');
}
