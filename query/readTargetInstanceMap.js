export function readTargetInstanceMap({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).valueMap('instanceId');
}
