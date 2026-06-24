import { meta as edge } from '../edge/index.js';

export function findComponentTaskNodeIdByName({ g }) {
  return ({ name, vertexId }) => g
    .V(vertexId)
    .out(edge.has_task.component_task.constants.LABEL)
    .has('name', name)
    .id();
}
