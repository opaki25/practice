// Exercise 0532: Multiply by a fixed factor (54).
// Predict each result before running: node exercises/0532-multiply.cjs
'use strict';

function solve(value) {
  return value * 54;
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
    108
  ],
  [
    -1,
    -54
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0532: all cases passed');
}
