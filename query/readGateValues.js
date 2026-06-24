export function readGateValues({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .valueMap('alias', 'fnc');
}
