// Exercise 0741: Add a fixed amount (75).
// Predict each result before running: node exercises/0741-add.cjs
'use strict';

function solve(value) {
  return value + 75;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    75
  ],
  [
    2,
    77
  ],
  [
    -75,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0741: all cases passed');
}
