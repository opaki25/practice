// Exercise 0123: Check a minimum threshold (13).
// Predict each result before running: node exercises/0123-at-least.cjs
'use strict';

function solve(value) {
  return value >= 13;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    13,
    true
  ],
  [
    12,
    false
  ],
  [
    14,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0123: all cases passed');
}
