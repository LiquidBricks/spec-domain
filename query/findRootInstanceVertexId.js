export function findRootInstanceVertexId({ g, domain }) {
  return ({ instanceId }) => g.V().has('label', domain.vertex.componentInstance.constants.LABEL).has('instanceId', instanceId).id();
}
