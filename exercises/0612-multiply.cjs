// Exercise 0612: Multiply by a fixed factor (62).
// Predict each result before running: node exercises/0612-multiply.cjs
'use strict';

function solve(value) {
  return value * 62;
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
    124
  ],
  [
    -1,
    -62
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0612: all cases passed');
}
