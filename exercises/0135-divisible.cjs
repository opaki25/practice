// Exercise 0135: Check divisibility (14).
// Predict each result before running: node exercises/0135-divisible.cjs
'use strict';

function solve(value) {
  return value % 14 === 0;
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
    42,
    true
  ],
  [
    15,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0135: all cases passed');
}
