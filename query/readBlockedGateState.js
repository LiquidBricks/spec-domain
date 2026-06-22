export function readBlockedGateState({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).valueMap('state');
}
