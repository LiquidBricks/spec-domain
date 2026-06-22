export function findTaskNodeId({ g, domain }) {
  return ({ edgeId }) => g.E(edgeId).inV().id();
}
