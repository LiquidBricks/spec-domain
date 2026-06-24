import { meta as vertex } from '../vertex/index.js';

export function findDataId({ g }) {
  return () => g
    .V()
    .has('label', vertex.data.constants.LABEL)
    .has('name', 'dataNoFnc')
    .id();
}
