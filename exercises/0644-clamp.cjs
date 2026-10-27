// Exercise 0644: Clamp to a symmetric range (65).
// Predict each result before running: node exercises/0644-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-65, Math.min(65, value));
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
    66,
    65
  ],
  [
    -66,
    -65
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0644: all cases passed');
}
