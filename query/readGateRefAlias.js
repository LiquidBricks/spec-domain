export function readGateRefAlias({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).valueMap('alias');
}
