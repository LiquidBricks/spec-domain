import { meta as vertex } from '../vertex/index.js';

export function findTask1Id({ g }) {
  return () => g
    .V()
    .has('label', vertex.task.constants.LABEL)
    .has('name', 'task1')
    .id();
}
