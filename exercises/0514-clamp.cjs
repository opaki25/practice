// Exercise 0514: Clamp to a symmetric range (52).
// Predict each result before running: node exercises/0514-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-52, Math.min(52, value));
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
    53,
    52
  ],
  [
    -53,
    -52
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0514: all cases passed');
}
