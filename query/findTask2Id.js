import { meta as vertex } from '../vertex/index.js';

export function findTask2Id({ g }) {
  return () => g
    .V()
    .has('label', vertex.task.constants.LABEL)
    .has('name', 'task2')
    .id();
}
