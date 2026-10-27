// Exercise 0131: Add a fixed amount (14).
// Predict each result before running: node exercises/0131-add.cjs
'use strict';

function solve(value) {
  return value + 14;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    14
  ],
  [
    2,
    16
  ],
  [
    -14,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0131: all cases passed');
}
