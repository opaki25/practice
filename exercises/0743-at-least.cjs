// Exercise 0743: Check a minimum threshold (75).
// Predict each result before running: node exercises/0743-at-least.cjs
'use strict';

function solve(value) {
  return value >= 75;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    75,
    true
  ],
  [
    74,
    false
  ],
  [
    76,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0743: all cases passed');
}
