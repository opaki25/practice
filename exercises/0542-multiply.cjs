// Exercise 0542: Multiply by a fixed factor (55).
// Predict each result before running: node exercises/0542-multiply.cjs
'use strict';

function solve(value) {
  return value * 55;
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
    110
  ],
  [
    -1,
    -55
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0542: all cases passed');
}
