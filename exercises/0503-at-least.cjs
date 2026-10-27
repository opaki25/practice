// Exercise 0503: Check a minimum threshold (51).
// Predict each result before running: node exercises/0503-at-least.cjs
'use strict';

function solve(value) {
  return value >= 51;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    51,
    true
  ],
  [
    50,
    false
  ],
  [
    52,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0503: all cases passed');
}
