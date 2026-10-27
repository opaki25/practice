// Exercise 0007: Append a numbered suffix (1).
// Predict each result before running: node exercises/0007-suffix.cjs
'use strict';

function solve(value) {
  return value + '-1';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-1"
  ],
  [
    "",
    "-1"
  ],
  [
    "hello world",
    "hello world-1"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0007: all cases passed');
}
