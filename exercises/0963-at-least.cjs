// Exercise 0963: Check a minimum threshold (97).
// Predict each result before running: node exercises/0963-at-least.cjs
'use strict';

function solve(value) {
  return value >= 97;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    97,
    true
  ],
  [
    96,
    false
  ],
  [
    98,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0963: all cases passed');
}
