// Exercise 0202: Multiply by a fixed factor (21).
// Predict each result before running: node exercises/0202-multiply.cjs
'use strict';

function solve(value) {
  return value * 21;
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
    42
  ],
  [
    -1,
    -21
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0202: all cases passed');
}
