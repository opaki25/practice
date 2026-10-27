// Exercise 0983: Check a minimum threshold (99).
// Predict each result before running: node exercises/0983-at-least.cjs
'use strict';

function solve(value) {
  return value >= 99;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    99,
    true
  ],
  [
    98,
    false
  ],
  [
    100,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0983: all cases passed');
}
