export function readStateMachineStateByInstanceId({ g, domain }) {
  return ({ instanceId }) => g.V().has('label', domain.vertex.componentInstance.constants.LABEL).has('instanceId', instanceId).out(domain.edge.has_stateMachine.componentInstance_stateMachine.constants.LABEL).valueMap('state');
}
