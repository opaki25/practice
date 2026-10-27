// Exercise 0001: Add a fixed amount (1).
// Predict each result before running: node exercises/0001-add.cjs
'use strict';

function solve(value) {
  return value + 1;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    1
  ],
  [
    2,
    3
  ],
  [
    -1,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0001: all cases passed');
}
