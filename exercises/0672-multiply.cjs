// Exercise 0672: Multiply by a fixed factor (68).
// Predict each result before running: node exercises/0672-multiply.cjs
'use strict';

function solve(value) {
  return value * 68;
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
    136
  ],
  [
    -1,
    -68
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0672: all cases passed');
}
