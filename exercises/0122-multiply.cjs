// Exercise 0122: Multiply by a fixed factor (13).
// Predict each result before running: node exercises/0122-multiply.cjs
'use strict';

function solve(value) {
  return value * 13;
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
    26
  ],
  [
    -1,
    -13
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0122: all cases passed');
}
