// Exercise 0054: Clamp to a symmetric range (6).
// Predict each result before running: node exercises/0054-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-6, Math.min(6, value));
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
    7,
    6
  ],
  [
    -7,
    -6
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0054: all cases passed');
}
