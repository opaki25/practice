// Exercise 0332: Multiply by a fixed factor (34).
// Predict each result before running: node exercises/0332-multiply.cjs
'use strict';

function solve(value) {
  return value * 34;
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
    68
  ],
  [
    -1,
    -34
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0332: all cases passed');
}
