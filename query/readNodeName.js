export function readNodeName({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .valueMap('name');
}
