// Exercise 0633: Check a minimum threshold (64).
// Predict each result before running: node exercises/0633-at-least.cjs
'use strict';

function solve(value) {
  return value >= 64;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    64,
    true
  ],
  [
    63,
    false
  ],
  [
    65,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0633: all cases passed');
}
