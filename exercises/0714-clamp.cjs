// Exercise 0714: Clamp to a symmetric range (72).
// Predict each result before running: node exercises/0714-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-72, Math.min(72, value));
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
    73,
    72
  ],
  [
    -73,
    -72
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0714: all cases passed');
}
