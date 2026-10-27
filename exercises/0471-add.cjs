// Exercise 0471: Add a fixed amount (48).
// Predict each result before running: node exercises/0471-add.cjs
'use strict';

function solve(value) {
  return value + 48;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    48
  ],
  [
    2,
    50
  ],
  [
    -48,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0471: all cases passed');
}
