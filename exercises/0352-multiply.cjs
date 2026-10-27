// Exercise 0352: Multiply by a fixed factor (36).
// Predict each result before running: node exercises/0352-multiply.cjs
'use strict';

function solve(value) {
  return value * 36;
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
    72
  ],
  [
    -1,
    -36
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0352: all cases passed');
}
