// Exercise 0452: Multiply by a fixed factor (46).
// Predict each result before running: node exercises/0452-multiply.cjs
'use strict';

function solve(value) {
  return value * 46;
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
    92
  ],
  [
    -1,
    -46
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0452: all cases passed');
}
