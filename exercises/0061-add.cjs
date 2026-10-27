// Exercise 0061: Add a fixed amount (7).
// Predict each result before running: node exercises/0061-add.cjs
'use strict';

function solve(value) {
  return value + 7;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    7
  ],
  [
    2,
    9
  ],
  [
    -7,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0061: all cases passed');
}
