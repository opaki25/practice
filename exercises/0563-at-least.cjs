// Exercise 0563: Check a minimum threshold (57).
// Predict each result before running: node exercises/0563-at-least.cjs
'use strict';

function solve(value) {
  return value >= 57;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    57,
    true
  ],
  [
    56,
    false
  ],
  [
    58,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0563: all cases passed');
}
