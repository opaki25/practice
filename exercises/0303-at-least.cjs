// Exercise 0303: Check a minimum threshold (31).
// Predict each result before running: node exercises/0303-at-least.cjs
'use strict';

function solve(value) {
  return value >= 31;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    31,
    true
  ],
  [
    30,
    false
  ],
  [
    32,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0303: all cases passed');
}
