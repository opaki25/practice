// Exercise 0811: Add a fixed amount (82).
// Predict each result before running: node exercises/0811-add.cjs
'use strict';

function solve(value) {
  return value + 82;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    82
  ],
  [
    2,
    84
  ],
  [
    -82,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0811: all cases passed');
}
