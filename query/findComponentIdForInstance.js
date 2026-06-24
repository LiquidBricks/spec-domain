import { meta as edge } from '../edge/index.js';

export function findComponentIdForInstance({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .out(edge.instance_of.componentInstance_component.constants.LABEL)
    .id();
}
