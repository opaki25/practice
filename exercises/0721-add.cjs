// Exercise 0721: Add a fixed amount (73).
// Predict each result before running: node exercises/0721-add.cjs
'use strict';

function solve(value) {
  return value + 73;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    73
  ],
  [
    2,
    75
  ],
  [
    -73,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0721: all cases passed');
}
