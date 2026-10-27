// Exercise 0055: Check divisibility (6).
// Predict each result before running: node exercises/0055-divisible.cjs
'use strict';

function solve(value) {
  return value % 6 === 0;
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
    18,
    true
  ],
  [
    7,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0055: all cases passed');
}
