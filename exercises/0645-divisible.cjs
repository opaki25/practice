// Exercise 0645: Check divisibility (65).
// Predict each result before running: node exercises/0645-divisible.cjs
'use strict';

function solve(value) {
  return value % 65 === 0;
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
    195,
    true
  ],
  [
    66,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0645: all cases passed');
}
