import { schema } from "./schema.js";
import * as constants from './constants.js'

function create({ g, diagnostics }) {
  return async function ({ state = constants.STATES.CREATED } = {}) {
    const now = new Date().toISOString();
    const [id] = await g
      .addV(constants.LABEL)
      .property('state', state)
      .property('createdAt', now)
      .property('updatedAt', now)
      .id();
    return { id }
  }
}

function setRunning({ g, diagnostics }) {
  return async function ({ stateMachineId, updatedAt = new Date().toISOString() }) {
    return g
      .V(stateMachineId)
      .property('state', constants.STATES.RUNNING)
      .property('updatedAt', updatedAt);
  }
}

function setComplete({ g, diagnostics }) {
  return async function ({ stateMachineId, updatedAt = new Date().toISOString() }) {
    return g
      .V(stateMachineId)
      .property('state', constants.STATES.COMPLETE)
      .property('updatedAt', updatedAt);
  }
}

export function stateMachine({ g, diagnostics }) {
  return {
    create: create({ g, diagnostics }),
    setRunning: setRunning({ g, diagnostics }),
    setComplete: setComplete({ g, diagnostics }),
  }
}

export const meta = {
  schema,
  constants,
}
