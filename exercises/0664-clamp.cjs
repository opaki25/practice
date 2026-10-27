// Exercise 0664: Clamp to a symmetric range (67).
// Predict each result before running: node exercises/0664-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-67, Math.min(67, value));
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
    68,
    67
  ],
  [
    -68,
    -67
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0664: all cases passed');
}
