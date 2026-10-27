// Exercise 0615: Check divisibility (62).
// Predict each result before running: node exercises/0615-divisible.cjs
'use strict';

function solve(value) {
  return value % 62 === 0;
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
    186,
    true
  ],
  [
    63,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0615: all cases passed');
}
