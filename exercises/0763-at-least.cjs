// Exercise 0763: Check a minimum threshold (77).
// Predict each result before running: node exercises/0763-at-least.cjs
'use strict';

function solve(value) {
  return value >= 77;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    77,
    true
  ],
  [
    76,
    false
  ],
  [
    78,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0763: all cases passed');
}
