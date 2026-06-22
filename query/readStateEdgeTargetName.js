export function readStateEdgeTargetName({ g, domain }) {
  return ({ edgeId }) => g.E(edgeId).inV().valueMap('name');
}
