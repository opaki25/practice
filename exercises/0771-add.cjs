// Exercise 0771: Add a fixed amount (78).
// Predict each result before running: node exercises/0771-add.cjs
'use strict';

function solve(value) {
  return value + 78;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    78
  ],
  [
    2,
    80
  ],
  [
    -78,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0771: all cases passed');
}
