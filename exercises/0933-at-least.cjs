// Exercise 0933: Check a minimum threshold (94).
// Predict each result before running: node exercises/0933-at-least.cjs
'use strict';

function solve(value) {
  return value >= 94;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    94,
    true
  ],
  [
    93,
    false
  ],
  [
    95,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0933: all cases passed');
}
