export function findEdgeTargetNodeId({ g }) {
  return ({ edgeId }) => g
    .E(edgeId)
    .inV()
    .id();
}
