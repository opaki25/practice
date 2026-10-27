// Exercise 0283: Check a minimum threshold (29).
// Predict each result before running: node exercises/0283-at-least.cjs
'use strict';

function solve(value) {
  return value >= 29;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    29,
    true
  ],
  [
    28,
    false
  ],
  [
    30,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0283: all cases passed');
}
