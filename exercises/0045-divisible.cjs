// Exercise 0045: Check divisibility (5).
// Predict each result before running: node exercises/0045-divisible.cjs
'use strict';

function solve(value) {
  return value % 5 === 0;
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
    15,
    true
  ],
  [
    6,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0045: all cases passed');
}
