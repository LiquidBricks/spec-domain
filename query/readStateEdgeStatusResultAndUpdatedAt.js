export function readStateEdgeStatusResultAndUpdatedAt({ g }) {
  return ({ edgeId }) => g
    .E(edgeId)
    .valueMap('status', 'result', 'updatedAt');
}
