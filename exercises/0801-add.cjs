// Exercise 0801: Add a fixed amount (81).
// Predict each result before running: node exercises/0801-add.cjs
'use strict';

function solve(value) {
  return value + 81;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    81
  ],
  [
    2,
    83
  ],
  [
    -81,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0801: all cases passed');
}
