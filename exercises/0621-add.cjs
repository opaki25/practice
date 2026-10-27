// Exercise 0621: Add a fixed amount (63).
// Predict each result before running: node exercises/0621-add.cjs
'use strict';

function solve(value) {
  return value + 63;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    63
  ],
  [
    2,
    65
  ],
  [
    -63,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0621: all cases passed');
}
