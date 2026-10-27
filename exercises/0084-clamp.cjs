// Exercise 0084: Clamp to a symmetric range (9).
// Predict each result before running: node exercises/0084-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-9, Math.min(9, value));
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
    10,
    9
  ],
  [
    -10,
    -9
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0084: all cases passed');
}
