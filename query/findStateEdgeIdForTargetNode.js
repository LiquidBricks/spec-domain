export function findStateEdgeIdForTargetNode({ g, domain }) {
  return ({ edgeLabel, vertexId, id }) => g.V(vertexId).outE(edgeLabel).filter(_ => _.inV().has('id', id)).id();
}
