// Exercise 0415: Check divisibility (42).
// Predict each result before running: node exercises/0415-divisible.cjs
'use strict';

function solve(value) {
  return value % 42 === 0;
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
    126,
    true
  ],
  [
    43,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0415: all cases passed');
}
