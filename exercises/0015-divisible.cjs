// Exercise 0015: Check divisibility (2).
// Predict each result before running: node exercises/0015-divisible.cjs
'use strict';

function solve(value) {
  return value % 2 === 0;
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
    6,
    true
  ],
  [
    3,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0015: all cases passed');
}
