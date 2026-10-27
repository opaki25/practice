// Exercise 0901: Add a fixed amount (91).
// Predict each result before running: node exercises/0901-add.cjs
'use strict';

function solve(value) {
  return value + 91;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    91
  ],
  [
    2,
    93
  ],
  [
    -91,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0901: all cases passed');
}
