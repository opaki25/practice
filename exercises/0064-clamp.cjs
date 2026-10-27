// Exercise 0064: Clamp to a symmetric range (7).
// Predict each result before running: node exercises/0064-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-7, Math.min(7, value));
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
    8,
    7
  ],
  [
    -8,
    -7
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0064: all cases passed');
}
