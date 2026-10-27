// Exercise 0141: Add a fixed amount (15).
// Predict each result before running: node exercises/0141-add.cjs
'use strict';

function solve(value) {
  return value + 15;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    15
  ],
  [
    2,
    17
  ],
  [
    -15,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0141: all cases passed');
}
