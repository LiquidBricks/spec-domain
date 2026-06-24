import { meta as vertex } from '../vertex/index.js';

export function findTargetComponentId({ g }) {
  return ({ hash }) => g
    .V()
    .has('label', vertex.component.constants.LABEL)
    .has('hash', hash)
    .id();
}
