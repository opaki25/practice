// Exercise 0111: Add a fixed amount (12).
// Predict each result before running: node exercises/0111-add.cjs
'use strict';

function solve(value) {
  return value + 12;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    12
  ],
  [
    2,
    14
  ],
  [
    -12,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0111: all cases passed');
}
