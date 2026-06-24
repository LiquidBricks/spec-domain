export function findDataVertexId({ g }) {
  return ({ edgeId }) => g
    .E(edgeId)
    .inV()
    .id();
}
