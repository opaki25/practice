// Exercise 0312: Multiply by a fixed factor (32).
// Predict each result before running: node exercises/0312-multiply.cjs
'use strict';

function solve(value) {
  return value * 32;
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
    64
  ],
  [
    -1,
    -32
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0312: all cases passed');
}
