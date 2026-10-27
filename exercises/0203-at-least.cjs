// Exercise 0203: Check a minimum threshold (21).
// Predict each result before running: node exercises/0203-at-least.cjs
'use strict';

function solve(value) {
  return value >= 21;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    21,
    true
  ],
  [
    20,
    false
  ],
  [
    22,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0203: all cases passed');
}
