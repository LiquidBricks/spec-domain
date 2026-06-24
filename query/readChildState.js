export function readChildState({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .valueMap('state');
}
