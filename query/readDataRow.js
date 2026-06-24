export function readDataRow({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .valueMap('name');
}
