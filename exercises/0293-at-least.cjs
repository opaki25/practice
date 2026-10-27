// Exercise 0293: Check a minimum threshold (30).
// Predict each result before running: node exercises/0293-at-least.cjs
'use strict';

function solve(value) {
  return value >= 30;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    30,
    true
  ],
  [
    29,
    false
  ],
  [
    31,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0293: all cases passed');
}
