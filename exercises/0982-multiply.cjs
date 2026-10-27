// Exercise 0982: Multiply by a fixed factor (99).
// Predict each result before running: node exercises/0982-multiply.cjs
'use strict';

function solve(value) {
  return value * 99;
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
    198
  ],
  [
    -1,
    -99
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0982: all cases passed');
}
