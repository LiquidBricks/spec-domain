import { meta as vertex } from '../vertex/index.js';

export function findDeferredId({ g }) {
  return () => g
    .V()
    .has('label', vertex.deferred.constants.LABEL)
    .has('name', 'deferred')
    .id();
}
