export function findTaskStateEdgeIdByName({ g, domain }) {
  return ({ edgeLabel, vertexId, name }) => g.V(vertexId).outE(edgeLabel).filter(_ => _.inV().has('name', name)).id();
}
