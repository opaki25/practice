// Exercise 0413: Check a minimum threshold (42).
// Predict each result before running: node exercises/0413-at-least.cjs
'use strict';

function solve(value) {
  return value >= 42;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    42,
    true
  ],
  [
    41,
    false
  ],
  [
    43,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0413: all cases passed');
}
