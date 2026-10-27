// Exercise 0512: Multiply by a fixed factor (52).
// Predict each result before running: node exercises/0512-multiply.cjs
'use strict';

function solve(value) {
  return value * 52;
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
    104
  ],
  [
    -1,
    -52
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0512: all cases passed');
}
