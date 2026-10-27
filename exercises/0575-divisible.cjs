// Exercise 0575: Check divisibility (58).
// Predict each result before running: node exercises/0575-divisible.cjs
'use strict';

function solve(value) {
  return value % 58 === 0;
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
    174,
    true
  ],
  [
    59,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0575: all cases passed');
}
