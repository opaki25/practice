// Exercise 0751: Add a fixed amount (76).
// Predict each result before running: node exercises/0751-add.cjs
'use strict';

function solve(value) {
  return value + 76;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    76
  ],
  [
    2,
    78
  ],
  [
    -76,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0751: all cases passed');
}
