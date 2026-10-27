// Exercise 0591: Add a fixed amount (60).
// Predict each result before running: node exercises/0591-add.cjs
'use strict';

function solve(value) {
  return value + 60;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    60
  ],
  [
    2,
    62
  ],
  [
    -60,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0591: all cases passed');
}
