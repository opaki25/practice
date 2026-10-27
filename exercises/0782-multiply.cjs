// Exercise 0782: Multiply by a fixed factor (79).
// Predict each result before running: node exercises/0782-multiply.cjs
'use strict';

function solve(value) {
  return value * 79;
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
    158
  ],
  [
    -1,
    -79
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0782: all cases passed');
}
