// Exercise 0772: Multiply by a fixed factor (78).
// Predict each result before running: node exercises/0772-multiply.cjs
'use strict';

function solve(value) {
  return value * 78;
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
    156
  ],
  [
    -1,
    -78
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0772: all cases passed');
}
