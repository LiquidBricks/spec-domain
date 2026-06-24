export function readBlockedGateState({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .valueMap('state');
}
