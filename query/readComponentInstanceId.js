export function readComponentInstanceId({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).valueMap('instanceId');
}
