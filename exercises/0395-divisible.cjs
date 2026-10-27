// Exercise 0395: Check divisibility (40).
// Predict each result before running: node exercises/0395-divisible.cjs
'use strict';

function solve(value) {
  return value % 40 === 0;
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
    120,
    true
  ],
  [
    41,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0395: all cases passed');
}
