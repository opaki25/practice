// Exercise 0113: Check a minimum threshold (12).
// Predict each result before running: node exercises/0113-at-least.cjs
'use strict';

function solve(value) {
  return value >= 12;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    12,
    true
  ],
  [
    11,
    false
  ],
  [
    13,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0113: all cases passed');
}
