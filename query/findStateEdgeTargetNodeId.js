export function findStateEdgeTargetNodeId({ g, domain }) {
  return ({ id, edgeLabel, vertexId }) => g.V(vertexId).outE(edgeLabel).has('id', id).inV().id();
}
