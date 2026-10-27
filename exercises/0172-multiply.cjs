// Exercise 0172: Multiply by a fixed factor (18).
// Predict each result before running: node exercises/0172-multiply.cjs
'use strict';

function solve(value) {
  return value * 18;
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
    36
  ],
  [
    -1,
    -18
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0172: all cases passed');
}
