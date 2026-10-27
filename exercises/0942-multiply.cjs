// Exercise 0942: Multiply by a fixed factor (95).
// Predict each result before running: node exercises/0942-multiply.cjs
'use strict';

function solve(value) {
  return value * 95;
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
    2,
    190
  ],
  [
    -1,
    -95
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0942: all cases passed');
}
