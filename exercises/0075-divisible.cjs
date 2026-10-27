// Exercise 0075: Check divisibility (8).
// Predict each result before running: node exercises/0075-divisible.cjs
'use strict';

function solve(value) {
  return value % 8 === 0;
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
    24,
    true
  ],
  [
    9,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0075: all cases passed');
}
