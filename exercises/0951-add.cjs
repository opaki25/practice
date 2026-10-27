// Exercise 0951: Add a fixed amount (96).
// Predict each result before running: node exercises/0951-add.cjs
'use strict';

function solve(value) {
  return value + 96;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    96
  ],
  [
    2,
    98
  ],
  [
    -96,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0951: all cases passed');
}
