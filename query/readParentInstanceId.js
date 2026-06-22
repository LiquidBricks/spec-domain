export function readParentInstanceId({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).valueMap('instanceId');
}
