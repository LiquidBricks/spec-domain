import { meta as vertex } from '../vertex/index.js';

export function findTaskAId({ g }) {
  return () => g
    .V()
    .has('label', vertex.task.constants.LABEL)
    .has('name', 'taskA')
    .id();
}
