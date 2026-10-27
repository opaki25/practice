// Exercise 0762: Multiply by a fixed factor (77).
// Predict each result before running: node exercises/0762-multiply.cjs
'use strict';

function solve(value) {
  return value * 77;
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
    154
  ],
  [
    -1,
    -77
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0762: all cases passed');
}
