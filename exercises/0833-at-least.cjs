// Exercise 0833: Check a minimum threshold (84).
// Predict each result before running: node exercises/0833-at-least.cjs
'use strict';

function solve(value) {
  return value >= 84;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    84,
    true
  ],
  [
    83,
    false
  ],
  [
    85,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0833: all cases passed');
}
