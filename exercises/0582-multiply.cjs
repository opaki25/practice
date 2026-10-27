// Exercise 0582: Multiply by a fixed factor (59).
// Predict each result before running: node exercises/0582-multiply.cjs
'use strict';

function solve(value) {
  return value * 59;
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
    118
  ],
  [
    -1,
    -59
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0582: all cases passed');
}
