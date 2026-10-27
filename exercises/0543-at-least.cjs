// Exercise 0543: Check a minimum threshold (55).
// Predict each result before running: node exercises/0543-at-least.cjs
'use strict';

function solve(value) {
  return value >= 55;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    55,
    true
  ],
  [
    54,
    false
  ],
  [
    56,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0543: all cases passed');
}
