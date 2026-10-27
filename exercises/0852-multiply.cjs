// Exercise 0852: Multiply by a fixed factor (86).
// Predict each result before running: node exercises/0852-multiply.cjs
'use strict';

function solve(value) {
  return value * 86;
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
    172
  ],
  [
    -1,
    -86
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0852: all cases passed');
}
