// Exercise 0014: Clamp to a symmetric range (2).
// Predict each result before running: node exercises/0014-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-2, Math.min(2, value));
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
    3,
    2
  ],
  [
    -3,
    -2
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0014: all cases passed');
}
