// Exercise 0883: Check a minimum threshold (89).
// Predict each result before running: node exercises/0883-at-least.cjs
'use strict';

function solve(value) {
  return value >= 89;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    89,
    true
  ],
  [
    88,
    false
  ],
  [
    90,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0883: all cases passed');
}
