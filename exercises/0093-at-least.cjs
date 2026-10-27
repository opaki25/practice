// Exercise 0093: Check a minimum threshold (10).
// Predict each result before running: node exercises/0093-at-least.cjs
'use strict';

function solve(value) {
  return value >= 10;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    10,
    true
  ],
  [
    9,
    false
  ],
  [
    11,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0093: all cases passed');
}
