// Exercise 0473: Check a minimum threshold (48).
// Predict each result before running: node exercises/0473-at-least.cjs
'use strict';

function solve(value) {
  return value >= 48;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    48,
    true
  ],
  [
    47,
    false
  ],
  [
    49,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0473: all cases passed');
}
