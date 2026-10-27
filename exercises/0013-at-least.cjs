// Exercise 0013: Check a minimum threshold (2).
// Predict each result before running: node exercises/0013-at-least.cjs
'use strict';

function solve(value) {
  return value >= 2;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    2,
    true
  ],
  [
    1,
    false
  ],
  [
    3,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0013: all cases passed');
}
