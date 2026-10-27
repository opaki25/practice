// Exercise 0074: Clamp to a symmetric range (8).
// Predict each result before running: node exercises/0074-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-8, Math.min(8, value));
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
    9,
    8
  ],
  [
    -9,
    -8
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0074: all cases passed');
}
