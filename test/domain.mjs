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

test('domain includes componentInstance has_log edge metadata for compute node types', () => {
  assert.deepEqual(
    [
      domain.edge.has_log.componentInstance_data.constants.LABEL,
      domain.edge.has_log.componentInstance_gateRef.constants.LABEL,
      domain.edge.has_log.componentInstance_task.constants.LABEL,
    ],
    [
      'domain.edge.has_log.componentInstance__data',
      'domain.edge.has_log.componentInstance__gateRef',
      'domain.edge.has_log.componentInstance__task',
    ],
  )

  for (const edgeType of [
    domain.edge.has_log.componentInstance_data,
    domain.edge.has_log.componentInstance_gateRef,
    domain.edge.has_log.componentInstance_task,
  ]) {
    assert.deepEqual(
      Object.keys(edgeType.schema.properties),
      ['logId', 'method', 'args', 'createdAt', 'updatedAt'],
    )
  }
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
    ['status', 'result', 'createdAt', 'updatedAt'],
  )
  assert.deepEqual(domain.edge.has_gate_state.stateMachine_gateInstanceRef.constants.Status, {
    WAITING: 'waiting',
    PROVIDED: 'provided',
    ERROR: 'error',
  })
  assert.equal(domain.edge.has_data_state.stateMachine_data.constants.Status.ERROR, 'error')
  assert.equal(domain.edge.has_task_state.stateMachine_task.constants.Status.ERROR, 'error')
})
