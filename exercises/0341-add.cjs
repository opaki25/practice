// Exercise 0341: Add a fixed amount (35).
// Predict each result before running: node exercises/0341-add.cjs
'use strict';

function solve(value) {
  return value + 35;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    35
  ],
  [
    2,
    37
  ],
  [
    -35,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0341: all cases passed');
}
