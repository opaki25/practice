// Exercise 0803: Check a minimum threshold (81).
// Predict each result before running: node exercises/0803-at-least.cjs
'use strict';

function solve(value) {
  return value >= 81;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    81,
    true
  ],
  [
    80,
    false
  ],
  [
    82,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0803: all cases passed');
}
