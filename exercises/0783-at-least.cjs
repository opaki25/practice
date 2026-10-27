// Exercise 0783: Check a minimum threshold (79).
// Predict each result before running: node exercises/0783-at-least.cjs
'use strict';

function solve(value) {
  return value >= 79;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    79,
    true
  ],
  [
    78,
    false
  ],
  [
    80,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0783: all cases passed');
}
