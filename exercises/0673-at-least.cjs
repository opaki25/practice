// Exercise 0673: Check a minimum threshold (68).
// Predict each result before running: node exercises/0673-at-least.cjs
'use strict';

function solve(value) {
  return value >= 68;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    68,
    true
  ],
  [
    67,
    false
  ],
  [
    69,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0673: all cases passed');
}
