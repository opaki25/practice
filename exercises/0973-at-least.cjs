// Exercise 0973: Check a minimum threshold (98).
// Predict each result before running: node exercises/0973-at-least.cjs
'use strict';

function solve(value) {
  return value >= 98;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    98,
    true
  ],
  [
    97,
    false
  ],
  [
    99,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0973: all cases passed');
}
