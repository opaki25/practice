// Exercise 0161: Add a fixed amount (17).
// Predict each result before running: node exercises/0161-add.cjs
'use strict';

function solve(value) {
  return value + 17;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    17
  ],
  [
    2,
    19
  ],
  [
    -17,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0161: all cases passed');
}
