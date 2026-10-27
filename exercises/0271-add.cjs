// Exercise 0271: Add a fixed amount (28).
// Predict each result before running: node exercises/0271-add.cjs
'use strict';

function solve(value) {
  return value + 28;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    28
  ],
  [
    2,
    30
  ],
  [
    -28,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0271: all cases passed');
}
