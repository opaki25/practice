// Exercise 0112: Multiply by a fixed factor (12).
// Predict each result before running: node exercises/0112-multiply.cjs
'use strict';

function solve(value) {
  return value * 12;
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
    24
  ],
  [
    -1,
    -12
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0112: all cases passed');
}
