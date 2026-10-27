// Exercise 0952: Multiply by a fixed factor (96).
// Predict each result before running: node exercises/0952-multiply.cjs
'use strict';

function solve(value) {
  return value * 96;
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
    192
  ],
  [
    -1,
    -96
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0952: all cases passed');
}
