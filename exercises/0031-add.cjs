// Exercise 0031: Add a fixed amount (4).
// Predict each result before running: node exercises/0031-add.cjs
'use strict';

function solve(value) {
  return value + 4;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    4
  ],
  [
    2,
    6
  ],
  [
    -4,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0031: all cases passed');
}
