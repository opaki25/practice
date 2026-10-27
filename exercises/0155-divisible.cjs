// Exercise 0155: Check divisibility (16).
// Predict each result before running: node exercises/0155-divisible.cjs
'use strict';

function solve(value) {
  return value % 16 === 0;
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
    48,
    true
  ],
  [
    17,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0155: all cases passed');
}
