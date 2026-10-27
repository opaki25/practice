// Exercise 0251: Add a fixed amount (26).
// Predict each result before running: node exercises/0251-add.cjs
'use strict';

function solve(value) {
  return value + 26;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    26
  ],
  [
    2,
    28
  ],
  [
    -26,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0251: all cases passed');
}
