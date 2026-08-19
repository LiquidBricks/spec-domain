import { meta as edge } from '../edge/index.js';

export function findHasLogEdgeId({ g }) {
  return ({ instanceVertexId, logId }) => g
    .V(instanceVertexId)
    .outE(
      edge.has_log.componentInstance_data.constants.LABEL,
      edge.has_log.componentInstance_gateRef.constants.LABEL,
      edge.has_log.componentInstance_task.constants.LABEL,
    )
    .has('logId', logId)
    .id();
}
