import { meta as edge } from '../edge/index.js';
import { meta as vertex } from '../vertex/index.js';

export function readStateMachineStateByInstanceId({ g }) {
  return ({ instanceId }) => g
    .V()
    .has('label', vertex.componentInstance.constants.LABEL)
    .has('instanceId', instanceId)
    .out(edge.has_stateMachine.componentInstance_stateMachine.constants.LABEL)
    .valueMap('state');
}
