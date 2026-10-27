// Exercise 0371: Add a fixed amount (38).
// Predict each result before running: node exercises/0371-add.cjs
'use strict';

function solve(value) {
  return value + 38;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    38
  ],
  [
    2,
    40
  ],
  [
    -38,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0371: all cases passed');
}
