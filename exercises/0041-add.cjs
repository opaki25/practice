// Exercise 0041: Add a fixed amount (5).
// Predict each result before running: node exercises/0041-add.cjs
'use strict';

function solve(value) {
  return value + 5;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    5
  ],
  [
    2,
    7
  ],
  [
    -5,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0041: all cases passed');
}
