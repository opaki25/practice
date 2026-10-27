// Exercise 0553: Check a minimum threshold (56).
// Predict each result before running: node exercises/0553-at-least.cjs
'use strict';

function solve(value) {
  return value >= 56;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    56,
    true
  ],
  [
    55,
    false
  ],
  [
    57,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0553: all cases passed');
}
