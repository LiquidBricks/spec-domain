export function readCompletedState({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).valueMap('state');
}
