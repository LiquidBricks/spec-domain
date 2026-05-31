import test from 'node:test'
import assert from 'node:assert/strict'

import { domain } from '../index.js'

test('domain includes componentAgent vertex metadata', () => {
  assert.equal(domain.vertex.componentAgent.constants.LABEL, 'domain.vertex.componentAgent')
  assert.deepEqual(
    Object.keys(domain.vertex.componentAgent.schema.properties),
    ['agentID', 'createdAt', 'updatedAt'],
  )
})

test('domain includes componentAgent to component provider edge metadata', () => {
  assert.equal(
    domain.edge.provides_component.componentAgent_component.constants.LABEL,
    'domain.edge.provides_component.componentAgent__component',
  )
})
