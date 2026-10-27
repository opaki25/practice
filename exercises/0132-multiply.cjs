// Exercise 0132: Multiply by a fixed factor (14).
// Predict each result before running: node exercises/0132-multiply.cjs
'use strict';

function solve(value) {
  return value * 14;
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
    28
  ],
  [
    -1,
    -14
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0132: all cases passed');
}
