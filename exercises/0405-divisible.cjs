// Exercise 0405: Check divisibility (41).
// Predict each result before running: node exercises/0405-divisible.cjs
'use strict';

function solve(value) {
  return value % 41 === 0;
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
    123,
    true
  ],
  [
    42,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0405: all cases passed');
}
