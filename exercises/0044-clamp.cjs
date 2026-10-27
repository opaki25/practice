// Exercise 0044: Clamp to a symmetric range (5).
// Predict each result before running: node exercises/0044-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-5, Math.min(5, value));
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
    6,
    5
  ],
  [
    -6,
    -5
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0044: all cases passed');
}
