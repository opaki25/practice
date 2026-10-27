// Exercise 0073: Check a minimum threshold (8).
// Predict each result before running: node exercises/0073-at-least.cjs
'use strict';

function solve(value) {
  return value >= 8;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    8,
    true
  ],
  [
    7,
    false
  ],
  [
    9,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0073: all cases passed');
}
