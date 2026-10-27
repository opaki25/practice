// Exercise 0545: Check divisibility (55).
// Predict each result before running: node exercises/0545-divisible.cjs
'use strict';

function solve(value) {
  return value % 55 === 0;
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
    165,
    true
  ],
  [
    56,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0545: all cases passed');
}
