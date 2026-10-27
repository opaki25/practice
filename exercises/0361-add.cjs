// Exercise 0361: Add a fixed amount (37).
// Predict each result before running: node exercises/0361-add.cjs
'use strict';

function solve(value) {
  return value + 37;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    37
  ],
  [
    2,
    39
  ],
  [
    -37,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0361: all cases passed');
}
