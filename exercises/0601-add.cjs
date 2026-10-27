// Exercise 0601: Add a fixed amount (61).
// Predict each result before running: node exercises/0601-add.cjs
'use strict';

function solve(value) {
  return value + 61;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    61
  ],
  [
    2,
    63
  ],
  [
    -61,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0601: all cases passed');
}
