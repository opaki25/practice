// Exercise 0173: Check a minimum threshold (18).
// Predict each result before running: node exercises/0173-at-least.cjs
'use strict';

function solve(value) {
  return value >= 18;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    18,
    true
  ],
  [
    17,
    false
  ],
  [
    19,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0173: all cases passed');
}
