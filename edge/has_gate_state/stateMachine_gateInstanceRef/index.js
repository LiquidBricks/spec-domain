import { schema } from "./schema.js";
import * as constants from './constants.js'

function create({ g, diagnostics }) {
  return async function ({ fromId, toId, status = constants.Status.WAITING, result = null }) {
    const now = new Date().toISOString();
    await g
      .addE(constants.LABEL, fromId, toId)
      .property('status', status)
      .property('result', result)
      .property('createdAt', now)
      .property('updatedAt', now)
  }
}

function updateResultStatusUpdatedAt({ g, diagnostics }) {
  return async function ({ edgeId, result, status, updatedAt }) {
    return g
      .E(edgeId)
      .property('result', result)
      .property('status', status)
      .property('updatedAt', updatedAt);
  }
}

function updateStatusUpdatedAt({ g, diagnostics }) {
  return async function ({ edgeId, status, updatedAt }) {
    return g
      .E(edgeId)
      .property('status', status)
      .property('updatedAt', updatedAt);
  }
}

export function stateMachine_gateInstanceRef({ g, diagnostics }) {
  return {
    create: create({ g, diagnostics }),
    updateResultStatusUpdatedAt: updateResultStatusUpdatedAt({ g, diagnostics }),
    updateStatusUpdatedAt: updateStatusUpdatedAt({ g, diagnostics }),
  }
}

export const meta = {
  schema,
  constants,
}
