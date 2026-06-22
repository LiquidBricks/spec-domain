export function readRunningState({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).valueMap('state');
}
