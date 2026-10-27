// Exercise 0163: Check a minimum threshold (17).
// Predict each result before running: node exercises/0163-at-least.cjs
'use strict';

function solve(value) {
  return value >= 17;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    17,
    true
  ],
  [
    16,
    false
  ],
  [
    18,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0163: all cases passed');
}
