// Exercise 0035: Check divisibility (4).
// Predict each result before running: node exercises/0035-divisible.cjs
'use strict';

function solve(value) {
  return value % 4 === 0;
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
    12,
    true
  ],
  [
    5,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0035: all cases passed');
}
