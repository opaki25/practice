// Exercise 0211: Add a fixed amount (22).
// Predict each result before running: node exercises/0211-add.cjs
'use strict';

function solve(value) {
  return value + 22;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    22
  ],
  [
    2,
    24
  ],
  [
    -22,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0211: all cases passed');
}
