// Exercise 0985: Check divisibility (99).
// Predict each result before running: node exercises/0985-divisible.cjs
'use strict';

function solve(value) {
  return value % 99 === 0;
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
    297,
    true
  ],
  [
    100,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0985: all cases passed');
}
