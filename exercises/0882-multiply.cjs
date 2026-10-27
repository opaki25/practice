// Exercise 0882: Multiply by a fixed factor (89).
// Predict each result before running: node exercises/0882-multiply.cjs
'use strict';

function solve(value) {
  return value * 89;
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
    178
  ],
  [
    -1,
    -89
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0882: all cases passed');
}
