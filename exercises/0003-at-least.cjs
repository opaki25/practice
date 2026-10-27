// Exercise 0003: Check a minimum threshold (1).
// Predict each result before running: node exercises/0003-at-least.cjs
'use strict';

function solve(value) {
  return value >= 1;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    1,
    true
  ],
  [
    0,
    false
  ],
  [
    2,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0003: all cases passed');
}
