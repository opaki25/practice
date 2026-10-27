// Exercise 0552: Multiply by a fixed factor (56).
// Predict each result before running: node exercises/0552-multiply.cjs
'use strict';

function solve(value) {
  return value * 56;
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
    112
  ],
  [
    -1,
    -56
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0552: all cases passed');
}
