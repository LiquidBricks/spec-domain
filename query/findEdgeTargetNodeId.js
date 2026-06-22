export function findEdgeTargetNodeId({ g, domain }) {
  return ({ edgeId }) => g.E(edgeId).inV().id();
}
