// Exercise 0392: Multiply by a fixed factor (40).
// Predict each result before running: node exercises/0392-multiply.cjs
'use strict';

function solve(value) {
  return value * 40;
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
    80
  ],
  [
    -1,
    -40
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0392: all cases passed');
}
