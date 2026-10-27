// Exercise 0043: Check a minimum threshold (5).
// Predict each result before running: node exercises/0043-at-least.cjs
'use strict';

function solve(value) {
  return value >= 5;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    5,
    true
  ],
  [
    4,
    false
  ],
  [
    6,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0043: all cases passed');
}
