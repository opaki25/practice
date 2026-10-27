// Exercise 0981: Add a fixed amount (99).
// Predict each result before running: node exercises/0981-add.cjs
'use strict';

function solve(value) {
  return value + 99;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    99
  ],
  [
    2,
    101
  ],
  [
    -99,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0981: all cases passed');
}
