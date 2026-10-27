// Exercise 0233: Check a minimum threshold (24).
// Predict each result before running: node exercises/0233-at-least.cjs
'use strict';

function solve(value) {
  return value >= 24;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    24,
    true
  ],
  [
    23,
    false
  ],
  [
    25,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0233: all cases passed');
}
