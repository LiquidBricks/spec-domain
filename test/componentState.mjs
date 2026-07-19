import test from 'node:test'
import assert from 'node:assert/strict'

import { dataMapper, domain } from '../index.js'

test('domain includes componentState vertex metadata', () => {
  assert.equal(domain.vertex.componentState.constants.LABEL, 'domain.vertex.componentState')
  assert.deepEqual(
    Object.keys(domain.vertex.componentState.schema.properties),
    ['state', 'createdAt', 'updatedAt'],
  )
  assert.deepEqual(
    domain.vertex.componentState.schema.required,
    ['state', 'createdAt', 'updatedAt'],
  )
})

test('domain includes componentInstance to componentState snapshot edge', () => {
  assert.equal(
    domain.edge.has_snapshot.componentInstance_componentState.constants.LABEL,
    'domain.edge.has_snapshot.componentInstance__componentState',
  )

  const mapper = dataMapper({ g: {}, diagnostics: {} })
  assert.equal(typeof mapper.vertex.componentState.create, 'function')
  assert.equal(typeof mapper.vertex.componentState.setState, 'function')
  assert.equal(typeof mapper.edge.has_snapshot.componentInstance_componentState.create, 'function')
  assert.equal(typeof mapper.query.readComponentStateId, 'function')
  assert.equal(typeof mapper.query.readComponentState, 'function')
})

function traversalRecorder({ ids = ['component-state-id'] } = {}) {
  const calls = []
  let idIndex = 0
  const traversal = {
    addV(...args) {
      calls.push(['addV', ...args])
      return traversal
    },
    addE(...args) {
      calls.push(['addE', ...args])
      return traversal
    },
    V(...args) {
      calls.push(['V', ...args])
      return traversal
    },
    out(...args) {
      calls.push(['out', ...args])
      return traversal
    },
    property(...args) {
      calls.push(['property', ...args])
      return traversal
    },
    valueMap(...args) {
      calls.push(['valueMap', ...args])
      return traversal
    },
    async id() {
      calls.push(['id'])
      return [ids[idIndex++]]
    },
  }
  return { calls, traversal }
}

test('componentState create persists state and setState replaces it', async () => {
  const { calls, traversal } = traversalRecorder()
  const mapper = dataMapper({ g: traversal, diagnostics: {} })
  const initialState = { 'data.url': null }

  const created = await mapper.vertex.componentState.create({ state: initialState })
  assert.deepEqual(created, { id: 'component-state-id' })
  assert.equal(calls[0][0], 'addV')
  assert.deepEqual(calls[1], ['property', 'state', initialState])
  assert.equal(calls[2][1], 'createdAt')
  assert.equal(calls[3][1], 'updatedAt')

  calls.length = 0
  const state = { 'data.url': 'https://example.test' }
  await mapper.vertex.componentState.setState({
    componentStateId: 'component-state-id',
    state,
    updatedAt: '2026-07-19T00:00:00.000Z',
  })
  assert.deepEqual(calls, [
    ['V', 'component-state-id'],
    ['property', 'state', state],
    ['property', 'updatedAt', '2026-07-19T00:00:00.000Z'],
  ])
})

test('componentInstance create remains entity-only', async () => {
  const { calls, traversal } = traversalRecorder({ ids: ['component-instance-id'] })
  const mapper = dataMapper({ g: traversal, diagnostics: {} })

  const created = await mapper.vertex.componentInstance.create({
    instanceId: 'instance-id',
  })

  assert.deepEqual(created, { id: 'component-instance-id' })
  assert.deepEqual(
    calls.filter(([method]) => method === 'addV'),
    [['addV', domain.vertex.componentInstance.constants.LABEL]],
  )
  assert.equal(calls.some(([method]) => method === 'addE'), false)
})

test('componentState queries traverse the snapshot edge and read state', async () => {
  const { calls, traversal } = traversalRecorder()
  const mapper = dataMapper({ g: traversal, diagnostics: {} })

  await mapper.query.readComponentStateId({ vertexId: 'component-instance-id' })
  assert.deepEqual(calls, [
    ['V', 'component-instance-id'],
    ['out', domain.edge.has_snapshot.componentInstance_componentState.constants.LABEL],
    ['id'],
  ])

  calls.length = 0
  await mapper.query.readComponentState({ vertexId: 'component-state-id' })
  assert.deepEqual(calls, [
    ['V', 'component-state-id'],
    ['valueMap', 'state', 'updatedAt'],
  ])
})
