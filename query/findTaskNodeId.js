export function findTaskNodeId({ g }) {
  return ({ edgeId }) => g
    .E(edgeId)
    .inV()
    .id();
}
