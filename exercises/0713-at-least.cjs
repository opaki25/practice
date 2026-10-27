// Exercise 0713: Check a minimum threshold (72).
// Predict each result before running: node exercises/0713-at-least.cjs
'use strict';

function solve(value) {
  return value >= 72;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    72,
    true
  ],
  [
    71,
    false
  ],
  [
    73,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0713: all cases passed');
}
