// Exercise 0372: Multiply by a fixed factor (38).
// Predict each result before running: node exercises/0372-multiply.cjs
'use strict';

function solve(value) {
  return value * 38;
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
    76
  ],
  [
    -1,
    -38
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0372: all cases passed');
}
