// Exercise 0423: Check a minimum threshold (43).
// Predict each result before running: node exercises/0423-at-least.cjs
'use strict';

function solve(value) {
  return value >= 43;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    43,
    true
  ],
  [
    42,
    false
  ],
  [
    44,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0423: all cases passed');
}
