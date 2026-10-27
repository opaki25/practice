// Exercise 0682: Multiply by a fixed factor (69).
// Predict each result before running: node exercises/0682-multiply.cjs
'use strict';

function solve(value) {
  return value * 69;
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
    138
  ],
  [
    -1,
    -69
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0682: all cases passed');
}
