export function readImportInstanceId({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .valueMap('instanceId');
}
