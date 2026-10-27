// Exercise 0703: Check a minimum threshold (71).
// Predict each result before running: node exercises/0703-at-least.cjs
'use strict';

function solve(value) {
  return value >= 71;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    71,
    true
  ],
  [
    70,
    false
  ],
  [
    72,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0703: all cases passed');
}
