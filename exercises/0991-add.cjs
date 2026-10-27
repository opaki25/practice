// Exercise 0991: Add a fixed amount (100).
// Predict each result before running: node exercises/0991-add.cjs
'use strict';

function solve(value) {
  return value + 100;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    100
  ],
  [
    2,
    102
  ],
  [
    -100,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0991: all cases passed');
}
