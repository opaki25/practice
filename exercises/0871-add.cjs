// Exercise 0871: Add a fixed amount (88).
// Predict each result before running: node exercises/0871-add.cjs
'use strict';

function solve(value) {
  return value + 88;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    88
  ],
  [
    2,
    90
  ],
  [
    -88,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0871: all cases passed');
}
