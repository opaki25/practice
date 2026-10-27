// Exercise 0753: Check a minimum threshold (76).
// Predict each result before running: node exercises/0753-at-least.cjs
'use strict';

function solve(value) {
  return value >= 76;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    76,
    true
  ],
  [
    75,
    false
  ],
  [
    77,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0753: all cases passed');
}
