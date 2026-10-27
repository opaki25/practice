// Exercise 0194: Clamp to a symmetric range (20).
// Predict each result before running: node exercises/0194-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-20, Math.min(20, value));
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
    21,
    20
  ],
  [
    -21,
    -20
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0194: all cases passed');
}
