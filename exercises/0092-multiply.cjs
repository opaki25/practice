// Exercise 0092: Multiply by a fixed factor (10).
// Predict each result before running: node exercises/0092-multiply.cjs
'use strict';

function solve(value) {
  return value * 10;
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
    20
  ],
  [
    -1,
    -10
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0092: all cases passed');
}
