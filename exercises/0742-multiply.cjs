// Exercise 0742: Multiply by a fixed factor (75).
// Predict each result before running: node exercises/0742-multiply.cjs
'use strict';

function solve(value) {
  return value * 75;
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
    150
  ],
  [
    -1,
    -75
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0742: all cases passed');
}
