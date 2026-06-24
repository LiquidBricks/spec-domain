export function readGatedComponentValues({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .valueMap('hash');
}
