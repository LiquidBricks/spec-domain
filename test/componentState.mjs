import test from 'node:test'
import assert from 'node:assert/strict'

import { dataMapper, domain } from '../index.js'

test('domain includes componentState vertex metadata', () => {
  assert.equal(domain.vertex.componentState.constants.LABEL, 'domain.vertex.componentState')
  assert.deepEqual(
    Object.keys(domain.vertex.componentState.schema.properties),
    ['createdAt', 'updatedAt'],
  )
})

test('domain includes componentInstance to componentState snapshot edge', () => {
  assert.equal(
    domain.edge.has_snapshot.componentInstance_componentState.constants.LABEL,
    'domain.edge.has_snapshot.componentInstance__componentState',
  )

  const mapper = dataMapper({ g: {}, diagnostics: {} })
  assert.equal(typeof mapper.vertex.componentState.create, 'function')
  assert.equal(typeof mapper.edge.has_snapshot.componentInstance_componentState.create, 'function')
})
