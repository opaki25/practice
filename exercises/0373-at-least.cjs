// Exercise 0373: Check a minimum threshold (38).
// Predict each result before running: node exercises/0373-at-least.cjs
'use strict';

function solve(value) {
  return value >= 38;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    38,
    true
  ],
  [
    37,
    false
  ],
  [
    39,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0373: all cases passed');
}
