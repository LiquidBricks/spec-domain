import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import test from 'node:test'

import { dataMapper } from '../index.js'

const specRoot = path.resolve(import.meta.dirname, '..')

function operationNames(kind) {
  return fs.readdirSync(path.join(specRoot, kind))
    .filter((file) => file.endsWith('.js') && file !== 'index.js')
    .map((file) => path.basename(file, '.js'))
    .sort()
}

function readSpecFile(relativePath) {
  return fs.readFileSync(path.join(specRoot, relativePath), 'utf8')
}

function mapperPath(root, segments) {
  return segments.reduce((current, segment) => current?.[segment], root)
}

const concreteMutations = [
  { path: ['vertex', 'stateMachine', 'setRunning'], file: 'vertex/stateMachine/index.js' },
  { path: ['vertex', 'stateMachine', 'setComplete'], file: 'vertex/stateMachine/index.js' },
  { path: ['vertex', 'importRef', 'setLifecycleWaitFor'], file: 'vertex/importRef/index.js' },
  { path: ['edge', 'has_gate_state', 'stateMachine_gateInstanceRef', 'setResultAndUpdatedAt'], file: 'edge/has_gate_state/stateMachine_gateInstanceRef/index.js' },
  { path: ['edge', 'has_data_state', 'stateMachine_data', 'setRunning'], file: 'edge/has_data_state/stateMachine_data/index.js' },
  { path: ['edge', 'has_data_state', 'stateMachine_data', 'setStatus'], file: 'edge/has_data_state/stateMachine_data/index.js' },
  { path: ['edge', 'has_data_state', 'stateMachine_data', 'setStatusAndResult'], file: 'edge/has_data_state/stateMachine_data/index.js' },
  { path: ['edge', 'has_data_state', 'stateMachine_data', 'updateResultStatusUpdatedAt'], file: 'edge/has_data_state/stateMachine_data/index.js' },
  { path: ['edge', 'has_task_state', 'stateMachine_task', 'setRunning'], file: 'edge/has_task_state/stateMachine_task/index.js' },
  { path: ['edge', 'has_task_state', 'stateMachine_task', 'setStatus'], file: 'edge/has_task_state/stateMachine_task/index.js' },
  { path: ['edge', 'has_task_state', 'stateMachine_task', 'setStatusAndResult'], file: 'edge/has_task_state/stateMachine_task/index.js' },
  { path: ['edge', 'has_task_state', 'stateMachine_task', 'updateResultStatusUpdatedAt'], file: 'edge/has_task_state/stateMachine_task/index.js' },
  { path: ['edge', 'injects_into', 'task_task', 'createWithTargetAliasPath'], file: 'edge/injects_into/task_task/index.js' },
  { path: ['edge', 'injects_into', 'task_data', 'createWithTargetAliasPath'], file: 'edge/injects_into/task_data/index.js' },
  { path: ['edge', 'injects_into', 'data_task', 'createWithTargetAliasPath'], file: 'edge/injects_into/data_task/index.js' },
  { path: ['edge', 'injects_into', 'data_data', 'createWithTargetAliasPath'], file: 'edge/injects_into/data_data/index.js' },
]

test('dataMapper exposes concrete query implementations and colocated mutation methods', () => {
  const mapper = dataMapper({ g: {}, diagnostics: {} })
  assert.deepEqual(Object.keys(mapper.query).sort(), operationNames('query'))
  assert.equal(mapper.mutation, undefined)

  for (const mutation of concreteMutations) {
    const operation = mutation.path.at(-1)
    assert.equal(typeof mapperPath(mapper, mutation.path), 'function', mutation.path.join('.'))

    const source = readSpecFile(mutation.file)
    assert.match(source, new RegExp('function\\s+' + operation + '\\b'), mutation.path.join('.') + ' must be implemented in ' + mutation.file)
    assert.match(source, /\bg\s*(?:\.|\?\.)/, mutation.path.join('.') + ' must own its graph traversal')
    assert.doesNotMatch(source, /\bProxy\b/, mutation.path.join('.') + ' must not be a traversal facade')
  }
})

test('a concrete query executes its full traversal inside spec-domain', async () => {
  const calls = []
  let chain
  chain = new Proxy({}, {
    get(_target, method) {
      if (method === 'then') return undefined
      return (...args) => {
        calls.push([method, ...args])
        return chain
      }
    },
  })
  const mapper = dataMapper({ g: chain, diagnostics: {} })

  await mapper.query.findComponentIdByHash({ hash: 'component-hash' })

  assert.deepEqual(calls, [
    ['V'],
    ['has', 'label', 'domain.vertex.component'],
    ['has', 'hash', 'component-hash'],
    ['id'],
  ])
})
