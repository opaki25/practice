// Exercise 0715: Check divisibility (72).
// Predict each result before running: node exercises/0715-divisible.cjs
'use strict';

function solve(value) {
  return value % 72 === 0;
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
    216,
    true
  ],
  [
    73,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0715: all cases passed');
}
