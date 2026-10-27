// Exercise 0221: Add a fixed amount (23).
// Predict each result before running: node exercises/0221-add.cjs
'use strict';

function solve(value) {
  return value + 23;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    23
  ],
  [
    2,
    25
  ],
  [
    -23,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0221: all cases passed');
}
