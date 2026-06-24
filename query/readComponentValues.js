export function readComponentValues({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .valueMap('hash');
}
