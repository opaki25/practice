// Exercise 0433: Check a minimum threshold (44).
// Predict each result before running: node exercises/0433-at-least.cjs
'use strict';

function solve(value) {
  return value >= 44;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    44,
    true
  ],
  [
    43,
    false
  ],
  [
    45,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0433: all cases passed');
}
