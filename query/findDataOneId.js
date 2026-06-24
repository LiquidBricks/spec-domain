import { meta as vertex } from '../vertex/index.js';

export function findDataOneId({ g }) {
  return () => g
    .V()
    .has('label', vertex.data.constants.LABEL)
    .has('name', 'dataOne')
    .id();
}
