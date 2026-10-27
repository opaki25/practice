// Exercise 0252: Multiply by a fixed factor (26).
// Predict each result before running: node exercises/0252-multiply.cjs
'use strict';

function solve(value) {
  return value * 26;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    0
  ],
  [
    2,
    52
  ],
  [
    -1,
    -26
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0252: all cases passed');
}
