// Exercise 0033: Check a minimum threshold (4).
// Predict each result before running: node exercises/0033-at-least.cjs
'use strict';

function solve(value) {
  return value >= 4;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    4,
    true
  ],
  [
    3,
    false
  ],
  [
    5,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0033: all cases passed');
}
