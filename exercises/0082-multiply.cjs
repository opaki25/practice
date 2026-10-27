// Exercise 0082: Multiply by a fixed factor (9).
// Predict each result before running: node exercises/0082-multiply.cjs
'use strict';

function solve(value) {
  return value * 9;
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
    18
  ],
  [
    -1,
    -9
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0082: all cases passed');
}
