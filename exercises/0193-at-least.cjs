// Exercise 0193: Check a minimum threshold (20).
// Predict each result before running: node exercises/0193-at-least.cjs
'use strict';

function solve(value) {
  return value >= 20;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    20,
    true
  ],
  [
    19,
    false
  ],
  [
    21,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0193: all cases passed');
}
