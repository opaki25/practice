// Exercise 0422: Multiply by a fixed factor (43).
// Predict each result before running: node exercises/0422-multiply.cjs
'use strict';

function solve(value) {
  return value * 43;
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
    86
  ],
  [
    -1,
    -43
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0422: all cases passed');
}
