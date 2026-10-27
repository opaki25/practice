// Exercise 0081: Add a fixed amount (9).
// Predict each result before running: node exercises/0081-add.cjs
'use strict';

function solve(value) {
  return value + 9;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    9
  ],
  [
    2,
    11
  ],
  [
    -9,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0081: all cases passed');
}
