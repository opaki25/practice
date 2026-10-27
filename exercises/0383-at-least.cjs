// Exercise 0383: Check a minimum threshold (39).
// Predict each result before running: node exercises/0383-at-least.cjs
'use strict';

function solve(value) {
  return value >= 39;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    39,
    true
  ],
  [
    38,
    false
  ],
  [
    40,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0383: all cases passed');
}
