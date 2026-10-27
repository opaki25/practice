// Exercise 0393: Check a minimum threshold (40).
// Predict each result before running: node exercises/0393-at-least.cjs
'use strict';

function solve(value) {
  return value >= 40;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    40,
    true
  ],
  [
    39,
    false
  ],
  [
    41,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0393: all cases passed');
}
