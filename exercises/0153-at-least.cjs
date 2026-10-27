// Exercise 0153: Check a minimum threshold (16).
// Predict each result before running: node exercises/0153-at-least.cjs
'use strict';

function solve(value) {
  return value >= 16;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    16,
    true
  ],
  [
    15,
    false
  ],
  [
    17,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0153: all cases passed');
}
