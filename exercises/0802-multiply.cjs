// Exercise 0802: Multiply by a fixed factor (81).
// Predict each result before running: node exercises/0802-multiply.cjs
'use strict';

function solve(value) {
  return value * 81;
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
    162
  ],
  [
    -1,
    -81
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0802: all cases passed');
}
