export function findDataVertexId({ g, domain }) {
  return ({ edgeId }) => g.E(edgeId).inV().id();
}
