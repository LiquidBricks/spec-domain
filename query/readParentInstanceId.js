export function readParentInstanceId({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .valueMap('instanceId');
}
