// Exercise 0281: Add a fixed amount (29).
// Predict each result before running: node exercises/0281-add.cjs
'use strict';

function solve(value) {
  return value + 29;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    29
  ],
  [
    2,
    31
  ],
  [
    -29,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0281: all cases passed');
}
