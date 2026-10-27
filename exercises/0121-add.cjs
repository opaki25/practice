// Exercise 0121: Add a fixed amount (13).
// Predict each result before running: node exercises/0121-add.cjs
'use strict';

function solve(value) {
  return value + 13;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    13
  ],
  [
    2,
    15
  ],
  [
    -13,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0121: all cases passed');
}
