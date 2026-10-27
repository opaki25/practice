// Exercise 0242: Multiply by a fixed factor (25).
// Predict each result before running: node exercises/0242-multiply.cjs
'use strict';

function solve(value) {
  return value * 25;
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
    50
  ],
  [
    -1,
    -25
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0242: all cases passed');
}
