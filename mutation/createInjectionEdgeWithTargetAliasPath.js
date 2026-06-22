export function createInjectionEdgeWithTargetAliasPath({ g }) {
  return ({ edgeLabel, fromId, toId, targetAliasPath }) => g
    .addE(edgeLabel, fromId, toId)
    .property('targetAliasPath', targetAliasPath);
}
