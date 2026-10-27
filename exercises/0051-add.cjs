// Exercise 0051: Add a fixed amount (6).
// Predict each result before running: node exercises/0051-add.cjs
'use strict';

function solve(value) {
  return value + 6;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    6
  ],
  [
    2,
    8
  ],
  [
    -6,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0051: all cases passed');
}
