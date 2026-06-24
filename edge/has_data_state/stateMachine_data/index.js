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

function setRunning({ g, diagnostics }) {
  return async function ({ edgeId, updatedAt }) {
    return g
      .E(edgeId)
      .property('status', constants.Status.RUNNING)
      .property('updatedAt', updatedAt);
  }
}

function setStatus({ g, diagnostics }) {
  return async function ({ edgeId, status }) {
    return g
      .E(edgeId)
      .property('status', status);
  }
}

function setStatusAndResult({ g, diagnostics }) {
  return async function ({ edgeId, status, result }) {
    return g
      .E(edgeId)
      .property('status', status)
      .property('result', result);
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

export function stateMachine_data({ g, diagnostics }) {
  return {
    create: create({ g, diagnostics }),
    setRunning: setRunning({ g, diagnostics }),
    setStatus: setStatus({ g, diagnostics }),
    setStatusAndResult: setStatusAndResult({ g, diagnostics }),
    updateResultStatusUpdatedAt: updateResultStatusUpdatedAt({ g, diagnostics }),
  }
}

export const meta = {
  schema,
  constants,
}
