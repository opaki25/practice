// Exercise 0053: Check a minimum threshold (6).
// Predict each result before running: node exercises/0053-at-least.cjs
'use strict';

function solve(value) {
  return value >= 6;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    6,
    true
  ],
  [
    5,
    false
  ],
  [
    7,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0053: all cases passed');
}
