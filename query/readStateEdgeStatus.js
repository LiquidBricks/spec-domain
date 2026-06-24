export function readStateEdgeStatus({ g }) {
  return ({ edgeId }) => g
    .E(edgeId)
    .valueMap('status');
}
