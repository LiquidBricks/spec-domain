export function readInstanceIdValues({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).valueMap('instanceId');
}
