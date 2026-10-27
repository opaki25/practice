// Exercise 0653: Check a minimum threshold (66).
// Predict each result before running: node exercises/0653-at-least.cjs
'use strict';

function solve(value) {
  return value >= 66;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    66,
    true
  ],
  [
    65,
    false
  ],
  [
    67,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0653: all cases passed');
}
