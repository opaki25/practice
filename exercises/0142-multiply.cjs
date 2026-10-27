// Exercise 0142: Multiply by a fixed factor (15).
// Predict each result before running: node exercises/0142-multiply.cjs
'use strict';

function solve(value) {
  return value * 15;
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
    30
  ],
  [
    -1,
    -15
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0142: all cases passed');
}
