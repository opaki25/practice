// Exercise 0605: Check divisibility (61).
// Predict each result before running: node exercises/0605-divisible.cjs
'use strict';

function solve(value) {
  return value % 61 === 0;
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
    183,
    true
  ],
  [
    62,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0605: all cases passed');
}
