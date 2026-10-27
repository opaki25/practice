// Exercise 0733: Check a minimum threshold (74).
// Predict each result before running: node exercises/0733-at-least.cjs
'use strict';

function solve(value) {
  return value >= 74;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    74,
    true
  ],
  [
    73,
    false
  ],
  [
    75,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0733: all cases passed');
}
