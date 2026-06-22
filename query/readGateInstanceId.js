export function readGateInstanceId({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).valueMap('instanceId');
}
