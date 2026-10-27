// Exercise 0581: Add a fixed amount (59).
// Predict each result before running: node exercises/0581-add.cjs
'use strict';

function solve(value) {
  return value + 59;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    59
  ],
  [
    2,
    61
  ],
  [
    -59,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0581: all cases passed');
}
