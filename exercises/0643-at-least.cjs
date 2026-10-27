// Exercise 0643: Check a minimum threshold (65).
// Predict each result before running: node exercises/0643-at-least.cjs
'use strict';

function solve(value) {
  return value >= 65;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    65,
    true
  ],
  [
    64,
    false
  ],
  [
    66,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0643: all cases passed');
}
