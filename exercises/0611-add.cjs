// Exercise 0611: Add a fixed amount (62).
// Predict each result before running: node exercises/0611-add.cjs
'use strict';

function solve(value) {
  return value + 62;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    62
  ],
  [
    2,
    64
  ],
  [
    -62,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0611: all cases passed');
}
