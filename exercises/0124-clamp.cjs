// Exercise 0124: Clamp to a symmetric range (13).
// Predict each result before running: node exercises/0124-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-13, Math.min(13, value));
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
    14,
    13
  ],
  [
    -14,
    -13
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0124: all cases passed');
}
