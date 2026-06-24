export function readComponentHash({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .valueMap('hash');
}
