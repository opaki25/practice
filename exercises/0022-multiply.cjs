// Exercise 0022: Multiply by a fixed factor (3).
// Predict each result before running: node exercises/0022-multiply.cjs
'use strict';

function solve(value) {
  return value * 3;
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
    6
  ],
  [
    -1,
    -3
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0022: all cases passed');
}
