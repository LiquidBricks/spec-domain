export function readParentInstanceIdMap({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).valueMap('instanceId');
}
