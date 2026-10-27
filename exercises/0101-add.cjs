// Exercise 0101: Add a fixed amount (11).
// Predict each result before running: node exercises/0101-add.cjs
'use strict';

function solve(value) {
  return value + 11;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    11
  ],
  [
    2,
    13
  ],
  [
    -11,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0101: all cases passed');
}
