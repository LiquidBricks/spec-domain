export function readTaskRows({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .valueMap('name');
}
