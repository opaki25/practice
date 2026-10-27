// Exercise 0961: Add a fixed amount (97).
// Predict each result before running: node exercises/0961-add.cjs
'use strict';

function solve(value) {
  return value + 97;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    97
  ],
  [
    2,
    99
  ],
  [
    -97,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0961: all cases passed');
}
