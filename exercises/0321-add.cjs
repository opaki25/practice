// Exercise 0321: Add a fixed amount (33).
// Predict each result before running: node exercises/0321-add.cjs
'use strict';

function solve(value) {
  return value + 33;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    33
  ],
  [
    2,
    35
  ],
  [
    -33,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0321: all cases passed');
}
