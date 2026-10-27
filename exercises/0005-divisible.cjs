// Exercise 0005: Check divisibility (1).
// Predict each result before running: node exercises/0005-divisible.cjs
'use strict';

function solve(value) {
  return value % 1 === 0;
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
    3,
    true
  ],
  [
    2,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0005: all cases passed');
}
