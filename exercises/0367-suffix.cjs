// Exercise 0367: Append a numbered suffix (37).
// Predict each result before running: node exercises/0367-suffix.cjs
'use strict';

function solve(value) {
  return value + '-37';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-37"
  ],
  [
    "",
    "-37"
  ],
  [
    "hello world",
    "hello world-37"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0367: all cases passed');
}
