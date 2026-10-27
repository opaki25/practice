// Exercise 0613: Check a minimum threshold (62).
// Predict each result before running: node exercises/0613-at-least.cjs
'use strict';

function solve(value) {
  return value >= 62;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    62,
    true
  ],
  [
    61,
    false
  ],
  [
    63,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0613: all cases passed');
}
