export function readComponentState({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .valueMap('state', 'updatedAt');
}
