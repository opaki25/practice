// Exercise 0781: Add a fixed amount (79).
// Predict each result before running: node exercises/0781-add.cjs
'use strict';

function solve(value) {
  return value + 79;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    79
  ],
  [
    2,
    81
  ],
  [
    -79,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0781: all cases passed');
}
