// Exercise 0171: Add a fixed amount (18).
// Predict each result before running: node exercises/0171-add.cjs
'use strict';

function solve(value) {
  return value + 18;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    18
  ],
  [
    2,
    20
  ],
  [
    -18,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0171: all cases passed');
}
