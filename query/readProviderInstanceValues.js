export function readProviderInstanceValues({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).valueMap('instanceId');
}
