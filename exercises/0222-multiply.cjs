// Exercise 0222: Multiply by a fixed factor (23).
// Predict each result before running: node exercises/0222-multiply.cjs
'use strict';

function solve(value) {
  return value * 23;
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
    46
  ],
  [
    -1,
    -23
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0222: all cases passed');
}
