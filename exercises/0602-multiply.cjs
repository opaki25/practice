// Exercise 0602: Multiply by a fixed factor (61).
// Predict each result before running: node exercises/0602-multiply.cjs
'use strict';

function solve(value) {
  return value * 61;
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
    122
  ],
  [
    -1,
    -61
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0602: all cases passed');
}
