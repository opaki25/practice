// Exercise 0195: Check divisibility (20).
// Predict each result before running: node exercises/0195-divisible.cjs
'use strict';

function solve(value) {
  return value % 20 === 0;
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
    60,
    true
  ],
  [
    21,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0195: all cases passed');
}
