import test from 'node:test'
import assert from 'node:assert/strict'

import { dataMapper, domain } from '../index.js'

function traversalRecorder() {
  const calls = []
  const traversal = {
    addE(...args) {
      calls.push(['addE', ...args])
      return traversal
    },
    V(...args) {
      calls.push(['V', ...args])
      return traversal
    },
    has(...args) {
      calls.push(['has', ...args])
      return traversal
    },
    outE(...args) {
      calls.push(['outE', ...args])
      return traversal
    },
    property(...args) {
      calls.push(['property', ...args])
      return traversal
    },
    async id() {
      calls.push(['id'])
      return ['generated-id']
    },
  }

  return { calls, traversal }
}

test('has_log edge variants retain their fact identity and console payload', async () => {
  const { calls, traversal } = traversalRecorder()
  const mapper = dataMapper({ g: traversal, diagnostics: {} })
  const args = ['inspect failed', { code: 125 }]
  const variants = [
    ['componentInstance_data', domain.edge.has_log.componentInstance_data.constants.LABEL],
    ['componentInstance_gateRef', domain.edge.has_log.componentInstance_gateRef.constants.LABEL],
    ['componentInstance_task', domain.edge.has_log.componentInstance_task.constants.LABEL],
  ]

  for (const [variant, label] of variants) {
    calls.length = 0
    const created = await mapper.edge.has_log[variant].create({
      fromId: 'instance-vertex-1',
      toId: 'compute-node-1',
      logId: 'log-1',
      method: 'error',
      args,
      updatedAt: '2026-08-15T12:34:56.000Z',
    })

    assert.deepEqual(created, { id: 'generated-id' })
    assert.deepEqual(calls, [
      ['addE', label, 'instance-vertex-1', 'compute-node-1'],
      ['property', 'logId', 'log-1'],
      ['property', 'method', 'error'],
      ['property', 'args', args],
      ['property', 'createdAt', '2026-08-15T12:34:56.000Z'],
      ['property', 'updatedAt', '2026-08-15T12:34:56.000Z'],
      ['id'],
    ])
  }

  assert.equal(domain.vertex.data.schema.oneOf, undefined)
  assert.equal(domain.vertex.data.schema.required.includes('codeRef'), true)
})

test('log projection query finds a unique typed edge by fact identity', async () => {
  const { calls, traversal } = traversalRecorder()
  const mapper = dataMapper({ g: traversal, diagnostics: {} })

  await mapper.query.findHasLogEdgeId({
    instanceVertexId: 'instance-vertex-1',
    logId: 'log-1',
  })
  assert.deepEqual(calls.map(([method]) => method), ['V', 'outE', 'has', 'id'])
  assert.deepEqual(calls[0], ['V', 'instance-vertex-1'])
  assert.deepEqual(calls[1], [
    'outE',
    domain.edge.has_log.componentInstance_data.constants.LABEL,
    domain.edge.has_log.componentInstance_gateRef.constants.LABEL,
    domain.edge.has_log.componentInstance_task.constants.LABEL,
  ])
  assert.deepEqual(calls[2], ['has', 'logId', 'log-1'])
})
