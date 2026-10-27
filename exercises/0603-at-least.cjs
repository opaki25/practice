// Exercise 0603: Check a minimum threshold (61).
// Predict each result before running: node exercises/0603-at-least.cjs
'use strict';

function solve(value) {
  return value >= 61;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    61,
    true
  ],
  [
    60,
    false
  ],
  [
    62,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0603: all cases passed');
}
