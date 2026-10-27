// Exercise 0492: Multiply by a fixed factor (50).
// Predict each result before running: node exercises/0492-multiply.cjs
'use strict';

function solve(value) {
  return value * 50;
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
    100
  ],
  [
    -1,
    -50
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0492: all cases passed');
}
