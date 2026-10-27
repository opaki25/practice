// Exercise 0024: Clamp to a symmetric range (3).
// Predict each result before running: node exercises/0024-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-3, Math.min(3, value));
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
    4,
    3
  ],
  [
    -4,
    -3
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0024: all cases passed');
}
