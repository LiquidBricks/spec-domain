export function readComponentRow({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .valueMap('hash');
}
