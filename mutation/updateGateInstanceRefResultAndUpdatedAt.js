export function updateGateInstanceRefResultAndUpdatedAt({ g, domain }) {
  return ({ result, vertexId }) => g.V(vertexId).property('result', result).property('updatedAt', new Date().toISOString());
}
