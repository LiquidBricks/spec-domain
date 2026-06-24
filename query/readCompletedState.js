export function readCompletedState({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .valueMap('state');
}
