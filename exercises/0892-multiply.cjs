// Exercise 0892: Multiply by a fixed factor (90).
// Predict each result before running: node exercises/0892-multiply.cjs
'use strict';

function solve(value) {
  return value * 90;
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
    180
  ],
  [
    -1,
    -90
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0892: all cases passed');
}
