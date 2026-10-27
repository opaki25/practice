// Exercise 0592: Multiply by a fixed factor (60).
// Predict each result before running: node exercises/0592-multiply.cjs
'use strict';

function solve(value) {
  return value * 60;
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
    120
  ],
  [
    -1,
    -60
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0592: all cases passed');
}
