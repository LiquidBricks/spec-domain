export function readStateMachineStateAndUpdatedAt({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).valueMap('state', 'updatedAt');
}
