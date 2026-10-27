// Exercise 0793: Check a minimum threshold (80).
// Predict each result before running: node exercises/0793-at-least.cjs
'use strict';

function solve(value) {
  return value >= 80;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    80,
    true
  ],
  [
    79,
    false
  ],
  [
    81,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0793: all cases passed');
}
