// Exercise 0144: Clamp to a symmetric range (15).
// Predict each result before running: node exercises/0144-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-15, Math.min(15, value));
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
    16,
    15
  ],
  [
    -16,
    -15
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0144: all cases passed');
}
