export function setStateEdgeStatusAndResult({ g }) {
  return ({ edgeId, status, result }) => g.E(edgeId).property('status', status).property('result', result);
}
