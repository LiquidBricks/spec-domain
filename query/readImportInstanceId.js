export function readImportInstanceId({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).valueMap('instanceId');
}
