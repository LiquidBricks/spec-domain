import { meta as vertex } from '../vertex/index.js';

export function listComponentIds({ g }) {
  return ({ hash }) => g
    .V()
    .has('label', vertex.component.constants.LABEL)
    .has('hash', hash)
    .id();
}
