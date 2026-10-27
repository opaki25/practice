// Exercise 0923: Check a minimum threshold (93).
// Predict each result before running: node exercises/0923-at-least.cjs
'use strict';

function solve(value) {
  return value >= 93;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    93,
    true
  ],
  [
    92,
    false
  ],
  [
    94,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0923: all cases passed');
}
