export function readStateEdgeStatusResultAndUpdatedAt({ g, domain }) {
  return ({ edgeId }) => g.E(edgeId).valueMap('status', 'result', 'updatedAt');
}
