export function readStateEdgeStatusAndResult({ g, domain }) {
  return ({ edgeId }) => g.E(edgeId).valueMap('status', 'result');
}
