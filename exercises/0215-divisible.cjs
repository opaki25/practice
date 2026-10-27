// Exercise 0215: Check divisibility (22).
// Predict each result before running: node exercises/0215-divisible.cjs
'use strict';

function solve(value) {
  return value % 22 === 0;
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
    66,
    true
  ],
  [
    23,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0215: all cases passed');
}
