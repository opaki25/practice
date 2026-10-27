// Exercise 0292: Multiply by a fixed factor (30).
// Predict each result before running: node exercises/0292-multiply.cjs
'use strict';

function solve(value) {
  return value * 30;
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
    60
  ],
  [
    -1,
    -30
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0292: all cases passed');
}
