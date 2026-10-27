// Exercise 0104: Clamp to a symmetric range (11).
// Predict each result before running: node exercises/0104-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-11, Math.min(11, value));
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
    12,
    11
  ],
  [
    -12,
    -11
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0104: all cases passed');
}
