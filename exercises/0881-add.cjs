// Exercise 0881: Add a fixed amount (89).
// Predict each result before running: node exercises/0881-add.cjs
'use strict';

function solve(value) {
  return value + 89;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    89
  ],
  [
    2,
    91
  ],
  [
    -89,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0881: all cases passed');
}
