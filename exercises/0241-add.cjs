// Exercise 0241: Add a fixed amount (25).
// Predict each result before running: node exercises/0241-add.cjs
'use strict';

function solve(value) {
  return value + 25;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    25
  ],
  [
    2,
    27
  ],
  [
    -25,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0241: all cases passed');
}
