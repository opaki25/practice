// Exercise 0842: Multiply by a fixed factor (85).
// Predict each result before running: node exercises/0842-multiply.cjs
'use strict';

function solve(value) {
  return value * 85;
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
    170
  ],
  [
    -1,
    -85
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0842: all cases passed');
}
