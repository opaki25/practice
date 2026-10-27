// Exercise 0301: Add a fixed amount (31).
// Predict each result before running: node exercises/0301-add.cjs
'use strict';

function solve(value) {
  return value + 31;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    31
  ],
  [
    2,
    33
  ],
  [
    -31,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0301: all cases passed');
}
