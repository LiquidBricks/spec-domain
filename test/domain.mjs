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
