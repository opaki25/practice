// Exercise 0323: Check a minimum threshold (33).
// Predict each result before running: node exercises/0323-at-least.cjs
'use strict';

function solve(value) {
  return value >= 33;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    33,
    true
  ],
  [
    32,
    false
  ],
  [
    34,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0323: all cases passed');
}
