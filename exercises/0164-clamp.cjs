// Exercise 0164: Clamp to a symmetric range (17).
// Predict each result before running: node exercises/0164-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-17, Math.min(17, value));
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
    18,
    17
  ],
  [
    -18,
    -17
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0164: all cases passed');
}
