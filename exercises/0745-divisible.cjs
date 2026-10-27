// Exercise 0745: Check divisibility (75).
// Predict each result before running: node exercises/0745-divisible.cjs
'use strict';

function solve(value) {
  return value % 75 === 0;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    true
  ],
  [
    225,
    true
  ],
  [
    76,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0745: all cases passed');
}
