// Exercise 0962: Multiply by a fixed factor (97).
// Predict each result before running: node exercises/0962-multiply.cjs
'use strict';

function solve(value) {
  return value * 97;
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
    194
  ],
  [
    -1,
    -97
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0962: all cases passed');
}
