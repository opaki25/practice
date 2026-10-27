// Exercise 0885: Check divisibility (89).
// Predict each result before running: node exercises/0885-divisible.cjs
'use strict';

function solve(value) {
  return value % 89 === 0;
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
    267,
    true
  ],
  [
    90,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0885: all cases passed');
}
