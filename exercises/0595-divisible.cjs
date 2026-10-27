// Exercise 0595: Check divisibility (60).
// Predict each result before running: node exercises/0595-divisible.cjs
'use strict';

function solve(value) {
  return value % 60 === 0;
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
    180,
    true
  ],
  [
    61,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0595: all cases passed');
}
