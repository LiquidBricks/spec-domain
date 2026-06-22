export function findEdgeId({ g, domain }) {
  return ({ edgeLabel, vertexId, name }) => g.V(vertexId).outE(edgeLabel).filter(_ => _.inV().has('name', name)).id();
}
