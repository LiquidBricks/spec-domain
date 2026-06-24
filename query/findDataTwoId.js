import { meta as vertex } from '../vertex/index.js';

export function findDataTwoId({ g }) {
  return () => g
    .V()
    .has('label', vertex.data.constants.LABEL)
    .has('name', 'dataTwo')
    .id();
}
