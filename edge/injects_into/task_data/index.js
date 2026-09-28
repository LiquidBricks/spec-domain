import { schema } from "./schema.js";
import * as constants from './constants.js'
import { createInjectionEdge } from '../create.js'

function create({ g, diagnostics }) {
  return async function ({
    fromId,
    toId,
    ownerComponentId,
    sourceAliasPath,
    targetAliasPath,
    selectionAlias,
  }) {
    return createInjectionEdge({
      traversal: g.addE(constants.LABEL, fromId, toId),
      ownerComponentId,
      sourceAliasPath,
      targetAliasPath,
      selectionAlias,
    })
  }
}

export function task_data({ g, diagnostics }) {
  return {
    create: create({ g, diagnostics }),
  }
}

export const meta = {
  schema,
  constants,
}
