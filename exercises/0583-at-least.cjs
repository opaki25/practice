// Exercise 0583: Check a minimum threshold (59).
// Predict each result before running: node exercises/0583-at-least.cjs
'use strict';

function solve(value) {
  return value >= 59;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    59,
    true
  ],
  [
    58,
    false
  ],
  [
    60,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0583: all cases passed');
}
