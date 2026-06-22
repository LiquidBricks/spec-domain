export function readInitialState({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).valueMap('state', 'updatedAt');
}
