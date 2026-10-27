// Exercise 0692: Multiply by a fixed factor (70).
// Predict each result before running: node exercises/0692-multiply.cjs
'use strict';

function solve(value) {
  return value * 70;
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
    140
  ],
  [
    -1,
    -70
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0692: all cases passed');
}
