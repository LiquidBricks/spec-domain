import { meta as edge } from '../edge/index.js';

export function findProvidedComponentId({ g }) {
  return ({ componentAgentId, componentHash }) => g
    .V(componentAgentId)
    .out(edge.provides_component.componentAgent_component.constants.LABEL)
    .has('hash', componentHash)
    .id();
}
