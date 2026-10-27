// Exercise 0893: Check a minimum threshold (90).
// Predict each result before running: node exercises/0893-at-least.cjs
'use strict';

function solve(value) {
  return value >= 90;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    90,
    true
  ],
  [
    89,
    false
  ],
  [
    91,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0893: all cases passed');
}
