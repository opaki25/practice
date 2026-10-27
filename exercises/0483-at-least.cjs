// Exercise 0483: Check a minimum threshold (49).
// Predict each result before running: node exercises/0483-at-least.cjs
'use strict';

function solve(value) {
  return value >= 49;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    49,
    true
  ],
  [
    48,
    false
  ],
  [
    50,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0483: all cases passed');
}
