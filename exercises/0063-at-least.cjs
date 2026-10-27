// Exercise 0063: Check a minimum threshold (7).
// Predict each result before running: node exercises/0063-at-least.cjs
'use strict';

function solve(value) {
  return value >= 7;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    7,
    true
  ],
  [
    6,
    false
  ],
  [
    8,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0063: all cases passed');
}
