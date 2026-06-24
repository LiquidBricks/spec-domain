import { meta as edge } from '../edge/index.js';

export function findDependencyDataTargetNodeIdByName({ g }) {
  return ({ name, vertexId }) => g
    .V(vertexId)
    .out(edge.has_data.component_data.constants.LABEL)
    .has('name', name)
    .id();
}
