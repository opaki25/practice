// Exercise 0573: Check a minimum threshold (58).
// Predict each result before running: node exercises/0573-at-least.cjs
'use strict';

function solve(value) {
  return value >= 58;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    58,
    true
  ],
  [
    57,
    false
  ],
  [
    59,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0573: all cases passed');
}
