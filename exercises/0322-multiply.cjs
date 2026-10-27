// Exercise 0322: Multiply by a fixed factor (33).
// Predict each result before running: node exercises/0322-multiply.cjs
'use strict';

function solve(value) {
  return value * 33;
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
    66
  ],
  [
    -1,
    -33
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0322: all cases passed');
}
