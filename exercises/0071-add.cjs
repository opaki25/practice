// Exercise 0071: Add a fixed amount (8).
// Predict each result before running: node exercises/0071-add.cjs
'use strict';

function solve(value) {
  return value + 8;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    8
  ],
  [
    2,
    10
  ],
  [
    -8,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0071: all cases passed');
}
