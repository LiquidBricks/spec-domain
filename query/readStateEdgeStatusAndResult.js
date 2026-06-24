export function readStateEdgeStatusAndResult({ g }) {
  return ({ edgeId }) => g
    .E(edgeId)
    .valueMap('status', 'result');
}
