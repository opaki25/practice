// Exercise 0932: Multiply by a fixed factor (94).
// Predict each result before running: node exercises/0932-multiply.cjs
'use strict';

function solve(value) {
  return value * 94;
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
    188
  ],
  [
    -1,
    -94
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0932: all cases passed');
}
