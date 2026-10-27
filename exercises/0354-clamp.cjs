// Exercise 0354: Clamp to a symmetric range (36).
// Predict each result before running: node exercises/0354-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-36, Math.min(36, value));
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
    37,
    36
  ],
  [
    -37,
    -36
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0354: all cases passed');
}
