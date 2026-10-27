// Exercise 0025: Check divisibility (3).
// Predict each result before running: node exercises/0025-divisible.cjs
'use strict';

function solve(value) {
  return value % 3 === 0;
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
    9,
    true
  ],
  [
    4,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0025: all cases passed');
}
