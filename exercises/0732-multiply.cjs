// Exercise 0732: Multiply by a fixed factor (74).
// Predict each result before running: node exercises/0732-multiply.cjs
'use strict';

function solve(value) {
  return value * 74;
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
    148
  ],
  [
    -1,
    -74
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0732: all cases passed');
}
