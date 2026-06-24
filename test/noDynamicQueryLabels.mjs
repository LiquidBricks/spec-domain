import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import test from 'node:test'

const queryRoot = path.resolve(import.meta.dirname, '../query')
const forbiddenPatterns = [
  /\bedgeLabels?\b/,
  /\.out\(\s*\.\.\.\s*edgeLabels\s*\)/,
  /\.in\(\s*\.\.\.\s*edgeLabels\s*\)/,
  /\.outE\(\s*\.\.\.\s*edgeLabels\s*\)/,
  /\.inE\(\s*\.\.\.\s*edgeLabels\s*\)/,
  /\.out\(\s*edgeLabel\s*\)/,
  /\.in\(\s*edgeLabel\s*\)/,
  /\.outE\(\s*edgeLabel\s*\)/,
  /\.inE\(\s*edgeLabel\s*\)/,
]

test('query operations use statically analyzable schema labels', () => {
  const violations = []
  for (const file of fs.readdirSync(queryRoot).filter((entry) => entry.endsWith('.js'))) {
    const filePath = path.join(queryRoot, file)
    const source = fs.readFileSync(filePath, 'utf8')
    for (const pattern of forbiddenPatterns) {
      if (pattern.test(source)) violations.push(file)
    }
  }

  assert.deepEqual(Array.from(new Set(violations)).sort(), [])
})
