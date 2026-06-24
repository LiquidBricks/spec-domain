export function readStateEdgeTargetName({ g }) {
  return ({ edgeId }) => g
    .E(edgeId)
    .inV()
    .valueMap('name');
}
