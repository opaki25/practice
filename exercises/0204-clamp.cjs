// Exercise 0204: Clamp to a symmetric range (21).
// Predict each result before running: node exercises/0204-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-21, Math.min(21, value));
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
    22,
    21
  ],
  [
    -22,
    -21
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0204: all cases passed');
}
