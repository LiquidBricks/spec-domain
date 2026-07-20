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
  }) {
    return createInjectionEdge({
      traversal: g.addE(constants.LABEL, fromId, toId),
      ownerComponentId,
      sourceAliasPath,
      targetAliasPath,
    })
  }
}

function createWithTargetAliasPath({ g, diagnostics }) {
  return create({ g, diagnostics })
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
