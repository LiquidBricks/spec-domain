import { schema } from './schema.js';
import * as constants from './constants.js'

function create({ g, diagnostics }) {
  return async function ({ fromId, toId, logId, method, args, updatedAt }) {
    const [id] = await g
      .addE(constants.LABEL, fromId, toId)
      .property('logId', logId)
      .property('method', method)
      .property('args', args)
      .property('createdAt', updatedAt)
      .property('updatedAt', updatedAt)
      .id()

    return { id }
  }
}

export function componentInstance_data({ g, diagnostics }) {
  return {
    create: create({ g, diagnostics }),
  }
}

export const meta = {
  schema,
  constants,
}
