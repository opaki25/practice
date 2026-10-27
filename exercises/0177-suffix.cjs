// Exercise 0177: Append a numbered suffix (18).
// Predict each result before running: node exercises/0177-suffix.cjs
'use strict';

function solve(value) {
  return value + '-18';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-18"
  ],
  [
    "",
    "-18"
  ],
  [
    "hello world",
    "hello world-18"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0177: all cases passed');
}
