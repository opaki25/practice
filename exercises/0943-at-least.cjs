// Exercise 0943: Check a minimum threshold (95).
// Predict each result before running: node exercises/0943-at-least.cjs
'use strict';

function solve(value) {
  return value >= 95;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    95,
    true
  ],
  [
    94,
    false
  ],
  [
    96,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0943: all cases passed');
}
