// Exercise 0922: Multiply by a fixed factor (93).
// Predict each result before running: node exercises/0922-multiply.cjs
'use strict';

function solve(value) {
  return value * 93;
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
    186
  ],
  [
    -1,
    -93
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0922: all cases passed');
}
