// Exercise 0223: Check a minimum threshold (23).
// Predict each result before running: node exercises/0223-at-least.cjs
'use strict';

function solve(value) {
  return value >= 23;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    23,
    true
  ],
  [
    22,
    false
  ],
  [
    24,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0223: all cases passed');
}
