// Exercise 0683: Check a minimum threshold (69).
// Predict each result before running: node exercises/0683-at-least.cjs
'use strict';

function solve(value) {
  return value >= 69;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    69,
    true
  ],
  [
    68,
    false
  ],
  [
    70,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0683: all cases passed');
}
