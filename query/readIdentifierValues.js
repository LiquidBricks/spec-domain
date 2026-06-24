export function readIdentifierValues({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .valueMap('instanceId');
}
