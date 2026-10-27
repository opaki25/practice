// Exercise 0274: Clamp to a symmetric range (28).
// Predict each result before running: node exercises/0274-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-28, Math.min(28, value));
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
    29,
    28
  ],
  [
    -29,
    -28
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0274: all cases passed');
}
