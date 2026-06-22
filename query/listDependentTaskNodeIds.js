export function listDependentTaskNodeIds({ g, domain }) {
  return ({ edgeLabels, vertexId }) => g.V(vertexId).in(...edgeLabels).id();
}
