// Exercise 0091: Add a fixed amount (10).
// Predict each result before running: node exercises/0091-add.cjs
'use strict';

function solve(value) {
  return value + 10;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    10
  ],
  [
    2,
    12
  ],
  [
    -10,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0091: all cases passed');
}
