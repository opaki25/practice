// Exercise 0183: Check a minimum threshold (19).
// Predict each result before running: node exercises/0183-at-least.cjs
'use strict';

function solve(value) {
  return value >= 19;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    19,
    true
  ],
  [
    18,
    false
  ],
  [
    20,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0183: all cases passed');
}
