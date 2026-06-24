#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const args = new Set(process.argv.slice(2));
const check = args.has('--check');
const root = path.resolve(import.meta.dirname, '..');
const queryRoot = path.join(root, 'query');

function isIdentifierStart(char) {
  return !!char && /[$A-Z_a-z]/.test(char);
}

function isIdentifierChar(char) {
  return !!char && /[$\w]/.test(char);
}

function isQuotedStart(char) {
  return char === '"' || char === "'" || char.charCodeAt(0) === 96;
}

function scanQuoted(source, index, quote) {
  let cursor = index + 1;

  while (cursor < source.length) {
    const char = source[cursor];

    if (char === '\\') {
      cursor += 2;
      continue;
    }

    if (char === quote) {
      return cursor + 1;
    }

    cursor += 1;
  }

  return cursor;
}

function scanLineComment(source, index) {
  const end = source.indexOf('\n', index + 2);
  return end === -1 ? source.length : end + 1;
}

function scanBlockComment(source, index) {
  const end = source.indexOf('*/', index + 2);
  return end === -1 ? source.length : end + 2;
}

function findExpressionEnd(source, start) {
  let parenDepth = 0;
  let bracketDepth = 0;
  let braceDepth = 0;
  let cursor = start;

  while (cursor < source.length) {
    const char = source[cursor];
    const next = source[cursor + 1];

    if (isQuotedStart(char)) {
      cursor = scanQuoted(source, cursor, char);
      continue;
    }

    if (char === '/' && next === '/') {
      cursor = scanLineComment(source, cursor);
      continue;
    }

    if (char === '/' && next === '*') {
      cursor = scanBlockComment(source, cursor);
      continue;
    }

    if (char === '(') parenDepth += 1;
    else if (char === ')') parenDepth -= 1;
    else if (char === '[') bracketDepth += 1;
    else if (char === ']') bracketDepth -= 1;
    else if (char === '{') braceDepth += 1;
    else if (char === '}') braceDepth -= 1;
    else if (char === ';' && parenDepth === 0 && bracketDepth === 0 && braceDepth === 0) return cursor;

    cursor += 1;
  }

  return cursor;
}

function findTopLevelChainSeparators(expression) {
  const separators = [];
  let parenDepth = 0;
  let bracketDepth = 0;
  let braceDepth = 0;
  let cursor = 1;

  while (cursor < expression.length) {
    const char = expression[cursor];
    const next = expression[cursor + 1];
    const nextNext = expression[cursor + 2];

    if (isQuotedStart(char)) {
      cursor = scanQuoted(expression, cursor, char);
      continue;
    }

    if (char === '/' && next === '/') {
      cursor = scanLineComment(expression, cursor);
      continue;
    }

    if (char === '/' && next === '*') {
      cursor = scanBlockComment(expression, cursor);
      continue;
    }

    if (char === '(') parenDepth += 1;
    else if (char === ')') parenDepth -= 1;
    else if (char === '[') bracketDepth += 1;
    else if (char === ']') bracketDepth -= 1;
    else if (char === '{') braceDepth += 1;
    else if (char === '}') braceDepth -= 1;
    else if (parenDepth === 0 && bracketDepth === 0 && braceDepth === 0) {
      if (char === '.' && isIdentifierStart(next)) {
        separators.push(cursor);
      } else if (char === '?' && next === '.' && isIdentifierStart(nextNext)) {
        separators.push(cursor);
        cursor += 1;
      }
    }

    cursor += 1;
  }

  return separators;
}

function splitRootGChain(expression) {
  const trimmed = expression.trim();

  if (!trimmed.startsWith('g')) return null;
  if (isIdentifierChar(trimmed[1])) return null;

  const separators = findTopLevelChainSeparators(trimmed);
  if (separators.length === 0) return null;

  return separators.map((separator, index) => {
    const nextSeparator = separators[index + 1] ?? trimmed.length;
    return trimmed.slice(separator, nextSeparator).trim();
  });
}

function lineIndentBefore(source, index) {
  const lineStart = source.lastIndexOf('\n', index - 1) + 1;
  const linePrefix = source.slice(lineStart, index);
  const match = linePrefix.match(/^\s*/);
  return match?.[0] ?? '';
}

function skipWhitespace(source, index) {
  let cursor = index;

  while (cursor < source.length && /\s/.test(source[cursor])) {
    cursor += 1;
  }

  return cursor;
}

function formatRootGChains(source) {
  let output = '';
  let cursor = 0;

  while (cursor < source.length) {
    const arrowIndex = source.indexOf('=>', cursor);

    if (arrowIndex === -1) {
      output += source.slice(cursor);
      break;
    }

    const expressionStart = skipWhitespace(source, arrowIndex + 2);

    if (source[expressionStart] !== 'g' || isIdentifierChar(source[expressionStart + 1])) {
      output += source.slice(cursor, expressionStart);
      cursor = expressionStart;
      continue;
    }

    const expressionEnd = findExpressionEnd(source, expressionStart);
    const expression = source.slice(expressionStart, expressionEnd);
    const segments = splitRootGChain(expression);

    if (!segments) {
      output += source.slice(cursor, expressionEnd);
      cursor = expressionEnd;
      continue;
    }

    const indent = lineIndentBefore(source, expressionStart);
    const chainIndent = indent + '  ';
    const formattedExpression = 'g\n' + chainIndent + segments.join('\n' + chainIndent);

    output += source.slice(cursor, expressionStart);
    output += formattedExpression;
    cursor = expressionEnd;
  }

  return output;
}

const files = fs.readdirSync(queryRoot)
  .filter((file) => file.endsWith('.js') && file !== 'index.js')
  .sort()
  .map((file) => path.join(queryRoot, file));

const changed = [];

for (const file of files) {
  const source = fs.readFileSync(file, 'utf8');
  const formatted = formatRootGChains(source);

  if (formatted === source) continue;

  changed.push(path.relative(root, file));

  if (!check) {
    fs.writeFileSync(file, formatted);
  }
}

if (changed.length === 0) {
  console.log('query g-chain format is clean');
  process.exit(0);
}

if (check) {
  console.error('query g-chain format failed for:');
  for (const file of changed) {
    console.error('- ' + file);
  }
  console.error('Run: npm run format:query-g');
  process.exit(1);
}

console.log('formatted ' + changed.length + ' query g-chain file' + (changed.length === 1 ? '' : 's'));
