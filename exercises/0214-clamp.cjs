// Exercise 0214: Clamp to a symmetric range (22).
// Predict each result before running: node exercises/0214-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-22, Math.min(22, value));
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
    23,
    22
  ],
  [
    -23,
    -22
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0214: all cases passed');
}
