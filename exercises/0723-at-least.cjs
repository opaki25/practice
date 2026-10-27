// Exercise 0723: Check a minimum threshold (73).
// Predict each result before running: node exercises/0723-at-least.cjs
'use strict';

function solve(value) {
  return value >= 73;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    73,
    true
  ],
  [
    72,
    false
  ],
  [
    74,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0723: all cases passed');
}
