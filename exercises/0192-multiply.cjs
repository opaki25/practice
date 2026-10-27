// Exercise 0192: Multiply by a fixed factor (20).
// Predict each result before running: node exercises/0192-multiply.cjs
'use strict';

function solve(value) {
  return value * 20;
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
    40
  ],
  [
    -1,
    -20
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0192: all cases passed');
}
