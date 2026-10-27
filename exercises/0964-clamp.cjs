// Exercise 0964: Clamp to a symmetric range (97).
// Predict each result before running: node exercises/0964-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-97, Math.min(97, value));
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
    98,
    97
  ],
  [
    -98,
    -97
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0964: all cases passed');
}
