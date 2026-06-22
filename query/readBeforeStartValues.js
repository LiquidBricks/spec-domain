export function readBeforeStartValues({ g, domain }) {
  return ({ edgeId }) => g.E(edgeId).valueMap('status', 'result');
}
