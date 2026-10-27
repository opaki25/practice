// Exercise 0094: Clamp to a symmetric range (10).
// Predict each result before running: node exercises/0094-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-10, Math.min(10, value));
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    0
  ],
  [
    11,
    10
  ],
  [
    -11,
    -10
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0094: all cases passed');
}
