// Exercise 0623: Check a minimum threshold (63).
// Predict each result before running: node exercises/0623-at-least.cjs
'use strict';

function solve(value) {
  return value >= 63;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    63,
    true
  ],
  [
    62,
    false
  ],
  [
    64,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0623: all cases passed');
}
