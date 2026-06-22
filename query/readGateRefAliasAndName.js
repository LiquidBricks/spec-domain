export function readGateRefAliasAndName({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).valueMap('alias', 'name');
}
