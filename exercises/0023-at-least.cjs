// Exercise 0023: Check a minimum threshold (3).
// Predict each result before running: node exercises/0023-at-least.cjs
'use strict';

function solve(value) {
  return value >= 3;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    3,
    true
  ],
  [
    2,
    false
  ],
  [
    4,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0023: all cases passed');
}
