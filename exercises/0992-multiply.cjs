// Exercise 0992: Multiply by a fixed factor (100).
// Predict each result before running: node exercises/0992-multiply.cjs
'use strict';

function solve(value) {
  return value * 100;
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
    200
  ],
  [
    -1,
    -100
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0992: all cases passed');
}
