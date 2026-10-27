// Exercise 0791: Add a fixed amount (80).
// Predict each result before running: node exercises/0791-add.cjs
'use strict';

function solve(value) {
  return value + 80;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    80
  ],
  [
    2,
    82
  ],
  [
    -80,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0791: all cases passed');
}
