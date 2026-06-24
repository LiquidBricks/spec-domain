import { meta as vertex } from '../vertex/index.js';

export function findTaskBId({ g }) {
  return () => g
    .V()
    .has('label', vertex.task.constants.LABEL)
    .has('name', 'taskB')
    .id();
}
