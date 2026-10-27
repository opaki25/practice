// Exercise 0362: Multiply by a fixed factor (37).
// Predict each result before running: node exercises/0362-multiply.cjs
'use strict';

function solve(value) {
  return value * 37;
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
    74
  ],
  [
    -1,
    -37
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0362: all cases passed');
}
