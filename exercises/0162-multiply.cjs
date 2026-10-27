// Exercise 0162: Multiply by a fixed factor (17).
// Predict each result before running: node exercises/0162-multiply.cjs
'use strict';

function solve(value) {
  return value * 17;
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
    34
  ],
  [
    -1,
    -17
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0162: all cases passed');
}
