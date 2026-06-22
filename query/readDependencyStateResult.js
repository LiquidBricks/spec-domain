export function readDependencyStateResult({ g, domain }) {
  return ({ edgeId }) => g.E(edgeId).valueMap('result');
}
