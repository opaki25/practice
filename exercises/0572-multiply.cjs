// Exercise 0572: Multiply by a fixed factor (58).
// Predict each result before running: node exercises/0572-multiply.cjs
'use strict';

function solve(value) {
  return value * 58;
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
    116
  ],
  [
    -1,
    -58
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0572: all cases passed');
}
