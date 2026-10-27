// Exercise 0513: Check a minimum threshold (52).
// Predict each result before running: node exercises/0513-at-least.cjs
'use strict';

function solve(value) {
  return value >= 52;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    52,
    true
  ],
  [
    51,
    false
  ],
  [
    53,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0513: all cases passed');
}
