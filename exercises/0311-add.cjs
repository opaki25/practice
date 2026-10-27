// Exercise 0311: Add a fixed amount (32).
// Predict each result before running: node exercises/0311-add.cjs
'use strict';

function solve(value) {
  return value + 32;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    32
  ],
  [
    2,
    34
  ],
  [
    -32,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0311: all cases passed');
}
