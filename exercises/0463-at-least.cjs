// Exercise 0463: Check a minimum threshold (47).
// Predict each result before running: node exercises/0463-at-least.cjs
'use strict';

function solve(value) {
  return value >= 47;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    47,
    true
  ],
  [
    46,
    false
  ],
  [
    48,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0463: all cases passed');
}
