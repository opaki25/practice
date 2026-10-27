// Exercise 0353: Check a minimum threshold (36).
// Predict each result before running: node exercises/0353-at-least.cjs
'use strict';

function solve(value) {
  return value >= 36;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    36,
    true
  ],
  [
    35,
    false
  ],
  [
    37,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0353: all cases passed');
}
