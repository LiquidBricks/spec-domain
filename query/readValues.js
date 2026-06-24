export function readValues({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .valueMap('alias');
}
