// Exercise 0464: Clamp to a symmetric range (47).
// Predict each result before running: node exercises/0464-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-47, Math.min(47, value));
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
    48,
    47
  ],
  [
    -48,
    -47
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0464: all cases passed');
}
