// Exercise 0145: Check divisibility (15).
// Predict each result before running: node exercises/0145-divisible.cjs
'use strict';

function solve(value) {
  return value % 15 === 0;
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
    45,
    true
  ],
  [
    16,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0145: all cases passed');
}
