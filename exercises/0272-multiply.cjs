// Exercise 0272: Multiply by a fixed factor (28).
// Predict each result before running: node exercises/0272-multiply.cjs
'use strict';

function solve(value) {
  return value * 28;
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
    56
  ],
  [
    -1,
    -28
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0272: all cases passed');
}
