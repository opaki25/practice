// Exercise 0593: Check a minimum threshold (60).
// Predict each result before running: node exercises/0593-at-least.cjs
'use strict';

function solve(value) {
  return value >= 60;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    60,
    true
  ],
  [
    59,
    false
  ],
  [
    61,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0593: all cases passed');
}
