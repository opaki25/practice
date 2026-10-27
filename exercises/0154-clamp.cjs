// Exercise 0154: Clamp to a symmetric range (16).
// Predict each result before running: node exercises/0154-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-16, Math.min(16, value));
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
    17,
    16
  ],
  [
    -17,
    -16
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0154: all cases passed');
}
