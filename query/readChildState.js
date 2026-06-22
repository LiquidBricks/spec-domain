export function readChildState({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).valueMap('state');
}
