// Exercise 0147: Append a numbered suffix (15).
// Predict each result before running: node exercises/0147-suffix.cjs
'use strict';

function solve(value) {
  return value + '-15';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-15"
  ],
  [
    "",
    "-15"
  ],
  [
    "hello world",
    "hello world-15"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0147: all cases passed');
}
