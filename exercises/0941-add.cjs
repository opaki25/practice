// Exercise 0941: Add a fixed amount (95).
// Predict each result before running: node exercises/0941-add.cjs
'use strict';

function solve(value) {
  return value + 95;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    95
  ],
  [
    2,
    97
  ],
  [
    -95,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0941: all cases passed');
}
