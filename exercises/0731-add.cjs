// Exercise 0731: Add a fixed amount (74).
// Predict each result before running: node exercises/0731-add.cjs
'use strict';

function solve(value) {
  return value + 74;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    74
  ],
  [
    2,
    76
  ],
  [
    -74,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0731: all cases passed');
}
