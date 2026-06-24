import { schema } from "./schema.js";
import * as constants from './constants.js'

function create({ g, diagnostics }) {
  return async function ({ fromId, toId }) {
    await g
      .addE(constants.LABEL, fromId, toId)
  }
}

function createWithTargetAliasPath({ g, diagnostics }) {
  return async function ({ fromId, toId, targetAliasPath }) {
    return g
      .addE(constants.LABEL, fromId, toId)
      .property('targetAliasPath', targetAliasPath);
  }
}

export function task_data({ g, diagnostics }) {
  return {
    create: create({ g, diagnostics }),
    createWithTargetAliasPath: createWithTargetAliasPath({ g, diagnostics }),
  }
}

export const meta = {
  schema,
  constants,
}
