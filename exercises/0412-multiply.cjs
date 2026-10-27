// Exercise 0412: Multiply by a fixed factor (42).
// Predict each result before running: node exercises/0412-multiply.cjs
'use strict';

function solve(value) {
  return value * 42;
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
    84
  ],
  [
    -1,
    -42
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0412: all cases passed');
}
