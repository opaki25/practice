// Exercise 0451: Add a fixed amount (46).
// Predict each result before running: node exercises/0451-add.cjs
'use strict';

function solve(value) {
  return value + 46;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    46
  ],
  [
    2,
    48
  ],
  [
    -46,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0451: all cases passed');
}
