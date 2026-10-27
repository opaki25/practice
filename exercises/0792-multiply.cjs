// Exercise 0792: Multiply by a fixed factor (80).
// Predict each result before running: node exercises/0792-multiply.cjs
'use strict';

function solve(value) {
  return value * 80;
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
    160
  ],
  [
    -1,
    -80
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0792: all cases passed');
}
