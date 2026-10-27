// Exercise 0165: Check divisibility (17).
// Predict each result before running: node exercises/0165-divisible.cjs
'use strict';

function solve(value) {
  return value % 17 === 0;
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
    51,
    true
  ],
  [
    18,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0165: all cases passed');
}
