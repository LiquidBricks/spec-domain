export function readTargetInstanceMap({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .valueMap('instanceId');
}
