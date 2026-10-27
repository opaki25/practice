// Exercise 0102: Multiply by a fixed factor (11).
// Predict each result before running: node exercises/0102-multiply.cjs
'use strict';

function solve(value) {
  return value * 11;
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
    22
  ],
  [
    -1,
    -11
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0102: all cases passed');
}
