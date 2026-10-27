// Exercise 0314: Clamp to a symmetric range (32).
// Predict each result before running: node exercises/0314-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-32, Math.min(32, value));
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
    33,
    32
  ],
  [
    -33,
    -32
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0314: all cases passed');
}
