// Exercise 0994: Clamp to a symmetric range (100).
// Predict each result before running: node exercises/0994-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-100, Math.min(100, value));
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
    101,
    100
  ],
  [
    -101,
    -100
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0994: all cases passed');
}
