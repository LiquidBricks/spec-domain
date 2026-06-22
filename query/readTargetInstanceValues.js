export function readTargetInstanceValues({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).valueMap('instanceId');
}
