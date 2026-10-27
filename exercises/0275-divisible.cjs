// Exercise 0275: Check divisibility (28).
// Predict each result before running: node exercises/0275-divisible.cjs
'use strict';

function solve(value) {
  return value % 28 === 0;
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
    84,
    true
  ],
  [
    29,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0275: all cases passed');
}
