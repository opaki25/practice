// Exercise 0795: Check divisibility (80).
// Predict each result before running: node exercises/0795-divisible.cjs
'use strict';

function solve(value) {
  return value % 80 === 0;
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
    240,
    true
  ],
  [
    81,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0795: all cases passed');
}
