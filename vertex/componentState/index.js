import { schema } from "./schema.js";
import * as constants from './constants.js'

function create({ g, diagnostics }) {
  return async function ({ state = {} } = {}) {
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

function setState({ g, diagnostics }) {
  return async function ({ componentStateId, state, updatedAt = new Date().toISOString() }) {
    return g
      .V(componentStateId)
      .property('state', state)
      .property('updatedAt', updatedAt);
  }
}

export function componentState({ g, diagnostics }) {
  return {
    create: create({ g, diagnostics }),
    setState: setState({ g, diagnostics }),
  }
}

export const meta = {
  schema,
  constants,
}
