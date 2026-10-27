// Exercise 0523: Check a minimum threshold (53).
// Predict each result before running: node exercises/0523-at-least.cjs
'use strict';

function solve(value) {
  return value >= 53;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    53,
    true
  ],
  [
    52,
    false
  ],
  [
    54,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0523: all cases passed');
}
