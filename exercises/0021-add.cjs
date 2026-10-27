// Exercise 0021: Add a fixed amount (3).
// Predict each result before running: node exercises/0021-add.cjs
'use strict';

function solve(value) {
  return value + 3;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    3
  ],
  [
    2,
    5
  ],
  [
    -3,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0021: all cases passed');
}
