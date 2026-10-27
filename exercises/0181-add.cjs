// Exercise 0181: Add a fixed amount (19).
// Predict each result before running: node exercises/0181-add.cjs
'use strict';

function solve(value) {
  return value + 19;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    19
  ],
  [
    2,
    21
  ],
  [
    -19,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0181: all cases passed');
}
