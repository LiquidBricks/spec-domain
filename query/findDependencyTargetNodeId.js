export function findDependencyTargetNodeId({ g, domain }) {
  return ({ name, edgeLabel, vertexId }) => g.V(vertexId).out(edgeLabel).has('name', name).id();
}
