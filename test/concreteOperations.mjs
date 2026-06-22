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

test('dataMapper exposes every concrete query and mutation implementation', () => {
  const mapper = dataMapper({ g: {}, diagnostics: {} })
  assert.deepEqual(Object.keys(mapper.query).sort(), operationNames('query'))
  assert.deepEqual(Object.keys(mapper.mutation).sort(), operationNames('mutation'))

  for (const kind of ['query', 'mutation']) {
    for (const operation of operationNames(kind)) {
      const source = fs.readFileSync(path.join(specRoot, kind, `${operation}.js`), 'utf8')
      assert.match(source, /\bg\s*(?:\.|\?\.)/, `${kind}.${operation} must own its graph traversal`)
      assert.doesNotMatch(source, /\bProxy\b/, `${kind}.${operation} must not be a traversal facade`)
    }
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
