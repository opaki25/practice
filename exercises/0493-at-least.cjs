// Exercise 0493: Check a minimum threshold (50).
// Predict each result before running: node exercises/0493-at-least.cjs
'use strict';

function solve(value) {
  return value >= 50;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    50,
    true
  ],
  [
    49,
    false
  ],
  [
    51,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0493: all cases passed');
}
