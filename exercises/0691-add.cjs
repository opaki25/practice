// Exercise 0691: Add a fixed amount (70).
// Predict each result before running: node exercises/0691-add.cjs
'use strict';

function solve(value) {
  return value + 70;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    70
  ],
  [
    2,
    72
  ],
  [
    -70,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0691: all cases passed');
}
