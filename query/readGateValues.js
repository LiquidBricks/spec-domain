export function readGateValues({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).valueMap('alias', 'fnc');
}
