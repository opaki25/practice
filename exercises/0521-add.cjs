// Exercise 0521: Add a fixed amount (53).
// Predict each result before running: node exercises/0521-add.cjs
'use strict';

function solve(value) {
  return value + 53;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    53
  ],
  [
    2,
    55
  ],
  [
    -53,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0521: all cases passed');
}
