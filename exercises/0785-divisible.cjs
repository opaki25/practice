// Exercise 0785: Check divisibility (79).
// Predict each result before running: node exercises/0785-divisible.cjs
'use strict';

function solve(value) {
  return value % 79 === 0;
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
    237,
    true
  ],
  [
    80,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0785: all cases passed');
}
