// Exercise 0903: Check a minimum threshold (91).
// Predict each result before running: node exercises/0903-at-least.cjs
'use strict';

function solve(value) {
  return value >= 91;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    91,
    true
  ],
  [
    90,
    false
  ],
  [
    92,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0903: all cases passed');
}
