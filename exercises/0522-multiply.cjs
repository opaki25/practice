// Exercise 0522: Multiply by a fixed factor (53).
// Predict each result before running: node exercises/0522-multiply.cjs
'use strict';

function solve(value) {
  return value * 53;
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
    106
  ],
  [
    -1,
    -53
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0522: all cases passed');
}
