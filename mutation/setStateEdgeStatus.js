export function setStateEdgeStatus({ g }) {
  return ({ edgeId, status }) => g.E(edgeId).property('status', status);
}
