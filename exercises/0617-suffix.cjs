// Exercise 0617: Append a numbered suffix (62).
// Predict each result before running: node exercises/0617-suffix.cjs
'use strict';

function solve(value) {
  return value + '-62';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-62"
  ],
  [
    "",
    "-62"
  ],
  [
    "hello world",
    "hello world-62"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0617: all cases passed');
}
