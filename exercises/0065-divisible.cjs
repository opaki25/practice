// Exercise 0065: Check divisibility (7).
// Predict each result before running: node exercises/0065-divisible.cjs
'use strict';

function solve(value) {
  return value % 7 === 0;
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
    21,
    true
  ],
  [
    8,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0065: all cases passed');
}
