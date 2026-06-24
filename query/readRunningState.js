export function readRunningState({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .valueMap('state');
}
