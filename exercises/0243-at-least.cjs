// Exercise 0243: Check a minimum threshold (25).
// Predict each result before running: node exercises/0243-at-least.cjs
'use strict';

function solve(value) {
  return value >= 25;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    25,
    true
  ],
  [
    24,
    false
  ],
  [
    26,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0243: all cases passed');
}
