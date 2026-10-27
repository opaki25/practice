// Exercise 0273: Check a minimum threshold (28).
// Predict each result before running: node exercises/0273-at-least.cjs
'use strict';

function solve(value) {
  return value >= 28;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    28,
    true
  ],
  [
    27,
    false
  ],
  [
    29,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0273: all cases passed');
}
