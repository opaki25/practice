// Exercise 0445: Check divisibility (45).
// Predict each result before running: node exercises/0445-divisible.cjs
'use strict';

function solve(value) {
  return value % 45 === 0;
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
    135,
    true
  ],
  [
    46,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0445: all cases passed');
}
