// Exercise 0642: Multiply by a fixed factor (65).
// Predict each result before running: node exercises/0642-multiply.cjs
'use strict';

function solve(value) {
  return value * 65;
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
    130
  ],
  [
    -1,
    -65
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0642: all cases passed');
}
