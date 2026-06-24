export function readStateMachineStateAndUpdatedAt({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .valueMap('state', 'updatedAt');
}
