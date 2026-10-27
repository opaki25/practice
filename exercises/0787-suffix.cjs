// Exercise 0787: Append a numbered suffix (79).
// Predict each result before running: node exercises/0787-suffix.cjs
'use strict';

function solve(value) {
  return value + '-79';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-79"
  ],
  [
    "",
    "-79"
  ],
  [
    "hello world",
    "hello world-79"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0787: all cases passed');
}
