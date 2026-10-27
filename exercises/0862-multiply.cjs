// Exercise 0862: Multiply by a fixed factor (87).
// Predict each result before running: node exercises/0862-multiply.cjs
'use strict';

function solve(value) {
  return value * 87;
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
    174
  ],
  [
    -1,
    -87
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0862: all cases passed');
}
