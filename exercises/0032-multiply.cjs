// Exercise 0032: Multiply by a fixed factor (4).
// Predict each result before running: node exercises/0032-multiply.cjs
'use strict';

function solve(value) {
  return value * 4;
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
    8
  ],
  [
    -1,
    -4
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0032: all cases passed');
}
