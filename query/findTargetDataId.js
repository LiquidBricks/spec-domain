import { meta as edge } from '../edge/index.js';

export function findTargetDataId({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .out(edge.has_data.component_data.constants.LABEL)
    .has('name', 'targetData')
    .id();
}
