// Exercise 0351: Add a fixed amount (36).
// Predict each result before running: node exercises/0351-add.cjs
'use strict';

function solve(value) {
  return value + 36;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    36
  ],
  [
    2,
    38
  ],
  [
    -36,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0351: all cases passed');
}
