// Exercise 0042: Multiply by a fixed factor (5).
// Predict each result before running: node exercises/0042-multiply.cjs
'use strict';

function solve(value) {
  return value * 5;
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
    10
  ],
  [
    -1,
    -5
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0042: all cases passed');
}
