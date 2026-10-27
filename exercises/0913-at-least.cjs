// Exercise 0913: Check a minimum threshold (92).
// Predict each result before running: node exercises/0913-at-least.cjs
'use strict';

function solve(value) {
  return value >= 92;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    92,
    true
  ],
  [
    91,
    false
  ],
  [
    93,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0913: all cases passed');
}
