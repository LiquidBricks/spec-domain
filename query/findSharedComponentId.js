import { meta as vertex } from '../vertex/index.js';

export function findSharedComponentId({ g }) {
  return ({ hash }) => g
    .V()
    .has('label', vertex.component.constants.LABEL)
    .has('hash', hash)
    .id();
}
