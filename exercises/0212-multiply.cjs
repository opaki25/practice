// Exercise 0212: Multiply by a fixed factor (22).
// Predict each result before running: node exercises/0212-multiply.cjs
'use strict';

function solve(value) {
  return value * 22;
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
    44
  ],
  [
    -1,
    -22
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0212: all cases passed');
}
