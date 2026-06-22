export function readStateEdgeStatus({ g, domain }) {
  return ({ edgeId }) => g.E(edgeId).valueMap('status');
}
