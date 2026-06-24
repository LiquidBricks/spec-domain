export function readGateInstanceId({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .valueMap('instanceId');
}
