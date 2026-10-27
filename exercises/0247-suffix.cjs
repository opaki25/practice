// Exercise 0247: Append a numbered suffix (25).
// Predict each result before running: node exercises/0247-suffix.cjs
'use strict';

function solve(value) {
  return value + '-25';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-25"
  ],
  [
    "",
    "-25"
  ],
  [
    "hello world",
    "hello world-25"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0247: all cases passed');
}
