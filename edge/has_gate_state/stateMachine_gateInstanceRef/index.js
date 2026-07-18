import { schema } from "./schema.js";
import * as constants from './constants.js'

function create({ g, diagnostics }) {
  return async function ({ fromId, toId, result = null }) {
    const now = new Date().toISOString();
    await g
      .addE(constants.LABEL, fromId, toId)
      .property('result', result)
      .property('createdAt', now)
      .property('updatedAt', now)
  }
}

function setResultAndUpdatedAt({ g, diagnostics }) {
  return async function ({ edgeId, result, updatedAt = new Date().toISOString() }) {
    return g
      .E(edgeId)
      .property('result', result)
      .property('updatedAt', updatedAt);
  }
}

export function stateMachine_gateInstanceRef({ g, diagnostics }) {
  return {
    create: create({ g, diagnostics }),
    setResultAndUpdatedAt: setResultAndUpdatedAt({ g, diagnostics }),
  }
}

export const meta = {
  schema,
  constants,
}
