// Exercise 0935: Check divisibility (94).
// Predict each result before running: node exercises/0935-divisible.cjs
'use strict';

function solve(value) {
  return value % 94 === 0;
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
    282,
    true
  ],
  [
    95,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0935: all cases passed');
}
