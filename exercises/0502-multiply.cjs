// Exercise 0502: Multiply by a fixed factor (51).
// Predict each result before running: node exercises/0502-multiply.cjs
'use strict';

function solve(value) {
  return value * 51;
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
    102
  ],
  [
    -1,
    -51
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0502: all cases passed');
}
