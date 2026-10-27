// Exercise 0253: Check a minimum threshold (26).
// Predict each result before running: node exercises/0253-at-least.cjs
'use strict';

function solve(value) {
  return value >= 26;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    26,
    true
  ],
  [
    25,
    false
  ],
  [
    27,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0253: all cases passed');
}
