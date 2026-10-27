// Exercise 0291: Add a fixed amount (30).
// Predict each result before running: node exercises/0291-add.cjs
'use strict';

function solve(value) {
  return value + 30;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    30
  ],
  [
    2,
    32
  ],
  [
    -30,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0291: all cases passed');
}
