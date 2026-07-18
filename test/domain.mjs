import test from 'node:test'
import assert from 'node:assert/strict'

import { domain } from '../index.js'

test('domain includes agentFn vertex metadata', () => {
  assert.equal(domain.vertex.agentFn.constants.LABEL, 'domain.vertex.agentFn')
  assert.deepEqual(
    Object.keys(domain.vertex.agentFn.schema.properties),
    ['name', 'portAddr', 'hash', 'codeRef', 'createdAt', 'updatedAt'],
  )
})

test('domain includes component to agentFn edge metadata', () => {
  assert.equal(
    domain.edge.has_agentFn.component_agentFn.constants.LABEL,
    'domain.edge.has_agentFn.component__agentFn',
  )
})

test('domain keeps gate result metadata on the state-machine edge', () => {
  assert.equal(domain.vertex.gateInstanceRef.constants.LABEL, 'domain.vertex.gateInstanceRef')
  assert.deepEqual(
    Object.keys(domain.vertex.gateInstanceRef.schema.properties),
    ['createdAt', 'updatedAt'],
  )
  assert.equal(
    domain.edge.has_gate_state.stateMachine_gateInstanceRef.constants.LABEL,
    'domain.edge.has_gate_state.stateMachine__gateInstanceRef',
  )
  assert.deepEqual(
    Object.keys(domain.edge.has_gate_state.stateMachine_gateInstanceRef.schema.properties),
    ['result', 'createdAt', 'updatedAt'],
  )
})
