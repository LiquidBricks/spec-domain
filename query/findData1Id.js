import { meta as vertex } from '../vertex/index.js';

export function findData1Id({ g }) {
  return () => g
    .V()
    .has('label', vertex.data.constants.LABEL)
    .has('name', 'data1')
    .id();
}
