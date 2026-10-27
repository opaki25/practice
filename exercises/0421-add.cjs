// Exercise 0421: Add a fixed amount (43).
// Predict each result before running: node exercises/0421-add.cjs
'use strict';

function solve(value) {
  return value + 43;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    43
  ],
  [
    2,
    45
  ],
  [
    -43,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0421: all cases passed');
}
