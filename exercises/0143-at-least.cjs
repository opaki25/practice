// Exercise 0143: Check a minimum threshold (15).
// Predict each result before running: node exercises/0143-at-least.cjs
'use strict';

function solve(value) {
  return value >= 15;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    15,
    true
  ],
  [
    14,
    false
  ],
  [
    16,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0143: all cases passed');
}
