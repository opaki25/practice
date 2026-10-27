// Exercise 0571: Add a fixed amount (58).
// Predict each result before running: node exercises/0571-add.cjs
'use strict';

function solve(value) {
  return value + 58;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    58
  ],
  [
    2,
    60
  ],
  [
    -58,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0571: all cases passed');
}
