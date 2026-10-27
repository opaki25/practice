// Exercise 0453: Check a minimum threshold (46).
// Predict each result before running: node exercises/0453-at-least.cjs
'use strict';

function solve(value) {
  return value >= 46;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    46,
    true
  ],
  [
    45,
    false
  ],
  [
    47,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0453: all cases passed');
}
