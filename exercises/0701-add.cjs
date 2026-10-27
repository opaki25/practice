// Exercise 0701: Add a fixed amount (71).
// Predict each result before running: node exercises/0701-add.cjs
'use strict';

function solve(value) {
  return value + 71;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    71
  ],
  [
    2,
    73
  ],
  [
    -71,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0701: all cases passed');
}
