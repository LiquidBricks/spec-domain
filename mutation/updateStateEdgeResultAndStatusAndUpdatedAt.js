export function updateStateEdgeResultAndStatusAndUpdatedAt({ g, domain }) {
  return ({ updatedAt, status, result, edgeId }) => g.E(edgeId).property('result', result).property('status', status).property('updatedAt', updatedAt);
}
