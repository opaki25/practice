// Exercise 0491: Add a fixed amount (50).
// Predict each result before running: node exercises/0491-add.cjs
'use strict';

function solve(value) {
  return value + 50;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    50
  ],
  [
    2,
    52
  ],
  [
    -50,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0491: all cases passed');
}
