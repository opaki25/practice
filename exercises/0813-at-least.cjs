// Exercise 0813: Check a minimum threshold (82).
// Predict each result before running: node exercises/0813-at-least.cjs
'use strict';

function solve(value) {
  return value >= 82;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    82,
    true
  ],
  [
    81,
    false
  ],
  [
    83,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0813: all cases passed');
}
