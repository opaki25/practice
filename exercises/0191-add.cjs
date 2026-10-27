// Exercise 0191: Add a fixed amount (20).
// Predict each result before running: node exercises/0191-add.cjs
'use strict';

function solve(value) {
  return value + 20;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    20
  ],
  [
    2,
    22
  ],
  [
    -20,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0191: all cases passed');
}
