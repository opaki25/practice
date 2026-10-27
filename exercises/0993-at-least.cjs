// Exercise 0993: Check a minimum threshold (100).
// Predict each result before running: node exercises/0993-at-least.cjs
'use strict';

function solve(value) {
  return value >= 100;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    100,
    true
  ],
  [
    99,
    false
  ],
  [
    101,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0993: all cases passed');
}
