// Exercise 0213: Check a minimum threshold (22).
// Predict each result before running: node exercises/0213-at-least.cjs
'use strict';

function solve(value) {
  return value >= 22;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    22,
    true
  ],
  [
    21,
    false
  ],
  [
    23,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0213: all cases passed');
}
