// Exercise 0174: Clamp to a symmetric range (18).
// Predict each result before running: node exercises/0174-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-18, Math.min(18, value));
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
    19,
    18
  ],
  [
    -19,
    -18
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0174: all cases passed');
}
