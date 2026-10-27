// Exercise 0632: Multiply by a fixed factor (64).
// Predict each result before running: node exercises/0632-multiply.cjs
'use strict';

function solve(value) {
  return value * 64;
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
    128
  ],
  [
    -1,
    -64
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0632: all cases passed');
}
