export function findProvidedComponentId({ g, domain }) {
  return ({ componentAgentId, componentHash }) => g
    .V(componentAgentId)
    .out(domain.edge.provides_component.componentAgent_component.constants.LABEL)
    .has('hash', componentHash)
    .id();
}
