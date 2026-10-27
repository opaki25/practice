// Exercise 0012: Multiply by a fixed factor (2).
// Predict each result before running: node exercises/0012-multiply.cjs
'use strict';

function solve(value) {
  return value * 2;
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
    4
  ],
  [
    -1,
    -2
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0012: all cases passed');
}
