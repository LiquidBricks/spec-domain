export function readDependencyStateResult({ g }) {
  return ({ edgeId }) => g
    .E(edgeId)
    .valueMap('result');
}
