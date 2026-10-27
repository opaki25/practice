// Exercise 0472: Multiply by a fixed factor (48).
// Predict each result before running: node exercises/0472-multiply.cjs
'use strict';

function solve(value) {
  return value * 48;
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
    96
  ],
  [
    -1,
    -48
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0472: all cases passed');
}
