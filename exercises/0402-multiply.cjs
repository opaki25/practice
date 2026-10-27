// Exercise 0402: Multiply by a fixed factor (41).
// Predict each result before running: node exercises/0402-multiply.cjs
'use strict';

function solve(value) {
  return value * 41;
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
    82
  ],
  [
    -1,
    -41
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0402: all cases passed');
}
