export function readInitialState({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .valueMap('state', 'updatedAt');
}
