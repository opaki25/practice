// Exercise 0873: Check a minimum threshold (88).
// Predict each result before running: node exercises/0873-at-least.cjs
'use strict';

function solve(value) {
  return value >= 88;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    88,
    true
  ],
  [
    87,
    false
  ],
  [
    89,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0873: all cases passed');
}
