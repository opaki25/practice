// Exercise 0501: Add a fixed amount (51).
// Predict each result before running: node exercises/0501-add.cjs
'use strict';

function solve(value) {
  return value + 51;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    51
  ],
  [
    2,
    53
  ],
  [
    -51,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0501: all cases passed');
}
