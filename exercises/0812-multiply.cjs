// Exercise 0812: Multiply by a fixed factor (82).
// Predict each result before running: node exercises/0812-multiply.cjs
'use strict';

function solve(value) {
  return value * 82;
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
    164
  ],
  [
    -1,
    -82
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0812: all cases passed');
}
