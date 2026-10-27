// Exercise 0133: Check a minimum threshold (14).
// Predict each result before running: node exercises/0133-at-least.cjs
'use strict';

function solve(value) {
  return value >= 14;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    14,
    true
  ],
  [
    13,
    false
  ],
  [
    15,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0133: all cases passed');
}
