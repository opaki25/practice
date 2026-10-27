// Exercise 0295: Check divisibility (30).
// Predict each result before running: node exercises/0295-divisible.cjs
'use strict';

function solve(value) {
  return value % 30 === 0;
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
    90,
    true
  ],
  [
    31,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0295: all cases passed');
}
